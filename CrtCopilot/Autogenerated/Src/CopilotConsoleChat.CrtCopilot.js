 define("CopilotConsoleChat", ["ServiceHelper"],
	function(ServiceHelper) {
		/**
		 * @class Terrasoft.CopilotConsoleChat
		 * Simple console chat to communicate with Copilot.
		 */
		Ext.define("Terrasoft.CopilotConsoleChat", {
			alternateClassName: "Copilot",
			extend: "Terrasoft.BaseObject",
			singleton: true,

			constructor: function () {
				Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onServerMessage, this);
				this.CopilotSession = {};
				ServiceHelper.callService({
					serviceName: "CopilotService",
					methodName: "GetActiveCopilotSessions",
					callback: this._onGetActiveCopilotSessions,
					scope: this
				});
			},

			_onMessages: [],

			_messages: [],

			CopilotSession: null,

			_setMessages: function (messages) {
				const sortedMessages = messages.sort(function(a, b) {
					return a.createdOnTicks - b.createdOnTicks;
				});
				this._messages = sortedMessages;
				this._onMessages.forEach(onMessage => {
					onMessage(this._messages);
				});
			},

			_onGetActiveCopilotSessions: function (response, isSuccess) {
				if (!isSuccess) {
					return;
				}
				if (response.copilotSessions && response.copilotSessions.length >= 1) {
					this.CopilotSession = response.copilotSessions[0];
					ServiceHelper.callService({
						serviceName: "CopilotService",
						methodName: "GetCopilotSessionMessage",
						data: {
							copilotSessionId: this.CopilotSession.id
						},
						callback: this._onGetCopilotSessionMessage,
						scope: this
					});
				}
			},

			_onGetCopilotSessionMessage: function (response, isSuccess) {
				if (!isSuccess) {
					return;
				}
				const messages = response.copilotMessages || [];
				this._setMessages(messages);
				this._printMessages(this._messages);
			},

			_printMessages: function (copilotMessages) {
				for (let i = 0; i < copilotMessages.length; i++) {
					let message = copilotMessages[i];
					if (message.role === "system") {
						continue;
					}
					this._printMessage(message);
				}
			},

			_printMessage: function (copilotMessage) {
				const colorsMapping = {
					"assistant": "#f3dc7f",
					"user": "#14d11d",
					'tool': "#f8efef"
				};
				const color = colorsMapping[copilotMessage.role] || "#bada55";
				console.log(`%c${copilotMessage.role}> ${copilotMessage.content}`, `background: #222; color: ${color}`);
				if (copilotMessage.toolCalls && copilotMessage.toolCalls.length > 0) {
					console.log(`%c${JSON.stringify(copilotMessage.toolCalls, null, 2)}`, 'background: #252; color: #bada55');
				}
			},
			
			_onNewChatPartReceived: function(message) {
				this.CopilotSession = message.Body.copilotSession;
				const copilotMessages = message.Body.messages;
				this._setMessages([...this._messages, ...copilotMessages]);
				this._printMessages(copilotMessages);
			},

			_onNewProgressStateReceived: function(message) {
				const stylesMapping = {
					"WaitingForAssistantMessage": "background: linear-gradient(90deg, #f3dc7f 0%, #ffe066 100%); color: #222; font-weight: bold;",
					"WaitingForUserMessage": "background: linear-gradient(90deg, #14d11d 0%, #4be04b 100%); color: #fff; font-weight: bold;",
					"ExecutingAction": "background: linear-gradient(90deg, #f8efef 0%, #ffe6e6 100%); color: #b22222; font-style: italic;",
					"SkillMessageSummarized": "background: linear-gradient(90deg, #bada55 0%, #d4ff7f 100%); color: #222; text-shadow: 1px 1px 2px #fff;",
					"TitleUpdated": "background: linear-gradient(90deg, #7fd3f3 0%, #66baff 100%); color: #222; font-weight: bold;",
					"SkillSelected": "background: linear-gradient(90deg, #ffb347 0%, #ffd580 100%); color: #222; font-weight: bold;",
					"AgentSelected": "background: linear-gradient(90deg, #c47fff 0%, #e0b3ff 100%); color: #222; font-weight: bold;"
				};
				const style = stylesMapping[message.Body.state] || "background: #222; color: #fff; font-weight: bold;";
				console.log(`%c${message.Body.description}...`, style);
			},

			/**
			 * Says something to the Copilot.
			 * @param {String} content Something.
			 */
			say: async function(content) {
				if (!content) {
					return null;
				}
				return new Promise((resolve, reject) => {
					ServiceHelper.callService({
						serviceName: "CopilotService",
						methodName: "SendUserMessage",
						data: {
							content: content,
							copilotSessionId: this.CopilotSession.id
						},
						callback: (response, isSuccess) => {
							if (!isSuccess) {
								reject(`Server return status: ${response.status}, isSuccess: ${isSuccess}`);
								return;
							}
							const copilotChatPart = response.copilotChatPart ?? {};
							const errorMessage = copilotChatPart.errorMessage;
							if (errorMessage) {
								reject(`Server return error message: ${errorMessage}`);
								return;
							}
							this.CopilotSession = copilotChatPart.copilotSession;
							resolve();
						},
						failure: (response) => {
							reject(`Server return status: ${response.status}`);
						},
					});
				});
			},

			closeSession: async function() {
				if (!this.CopilotSession || !this.CopilotSession.id) {
					return;
				}
				return new Promise((resolve, reject) => {
					ServiceHelper.callService({
						serviceName: "CopilotService",
						methodName: "CloseSession",
						data: {
							copilotSessionId: this.CopilotSession.id
						},
						callback: (response, isSuccess) => {
							if (!isSuccess) {
								reject(`Server return status: ${response.status}, isSuccess: ${isSuccess}`);
								return;
							}
							this.CopilotSession = {};
							this._messages = [];
							resolve();
						},
						failure: (response) => {
							reject(`Server return status: ${response.status}`);
						},
					});
				});
			},

			onServerMessage: function (scope, message) {
				if (!message || !message.Header || message.Header.Sender !== "CopilotMsgChannelSender") {
					return;
				}
				if (message.Header.BodyTypeName === "CopilotChatPart") {
					this._onNewChatPartReceived(message);
				} else if (message.Header.BodyTypeName === "CopilotSessionProgress") {
					this._onNewProgressStateReceived(message);
				}
			},

			subscribeOnMessages: function(callback) {
				this._onMessages.push(callback);
				if (this._messages.length) {
					callback(this._messages);
				}
			}
		});
		return Terrasoft.CopilotConsoleChat;
	});
