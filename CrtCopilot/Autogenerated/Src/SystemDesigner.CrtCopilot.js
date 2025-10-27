define("SystemDesigner", ["SystemDesignerResources"], function (resources, NetworkUtilities) {
	return {
		methods: {
			/**
			 * Opens Creatio.ai skills section.
			 * @private
			 */
			_navigateToCopilotIntents: function () {
				this.sandbox.publish("PushHistoryState", {
					hash: "Section/AISkills_ListPage"
				});
			},

			/**
			 * Opens Creatio.ai agent section.
			 * @private
			 */
			_navigateToCopilotAgents: function () {
				this.sandbox.publish("PushHistoryState", {
					hash: "Section/AIAgents_ListPage"
				});
			},

			/**
			 * @return {Boolean} True if Copilot intent is enabled.
			 * @private
			 */
			_isGenAICopilotEnabled: function () {
				return this.getIsFeatureEnabled("GenAIFeatures.Copilot");
			},

			/**
			 * @return {Boolean} True if Copilot agent is enabled.
			 * @private
			 */
			_isGenAIAgentEnabled: function () {
				return this.getIsFeatureEnabled("GenAIFeatures.UseCopilotAgents");
			}

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "SystemSettingsTile",
				"name": "AISkills",
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": {"bindTo": "Resources.Strings.CopilotIntentsPage"},
					"tag": "_navigateToCopilotIntents",
					"click": {"bindTo": "invokeOperation"},
					"visible": {"bindTo": "_isGenAICopilotEnabled"},
					"isNew": true
				}
			},
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "SystemSettingsTile",
				"name": "AIAgents",
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": {"bindTo": "Resources.Strings.CopilotAgentsPage"},
					"tag": "_navigateToCopilotAgents",
					"click": {"bindTo": "invokeOperation"},
					"visible": {"bindTo": "_isGenAIAgentEnabled"},
					"isNew": true
				}
			}
		]
	};
});