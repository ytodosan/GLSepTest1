namespace IntegrationV2.Files.cs.Domains.MeetingDomain.EventListener
{
	using System;
	using System.Collections.Generic;
	using System.Diagnostics.CodeAnalysis;
	using System.Linq;
	using IntegrationV2.Files.cs.Domains.MeetingDomain.Logger;
	using IntegrationV2.Files.cs.Domains.MeetingDomain.Synchronization;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Tasks;
	using Terrasoft.EmailDomain.Interfaces;
	using Terrasoft.IntegrationV2.Utils;
	using Terrasoft.Web.Http.Abstractions;

	#region Class: BaseCalendarEventListener

	/// <summary>
	/// Contains basic logic of calendar event listeners.
	/// </summary>
	[ExcludeFromCodeCoverage]
	public class BaseCalendarEventListener: BaseEntityEventListener
	{

		#region Properties: Protected

		private ICalendarLogger _logger;

		protected ICalendarLogger Logger { 
			get {
				if (_logger == null && ClassFactory.HasBinding<ICalendarLogger>()) {
					_logger = ClassFactory.Get<ICalendarLogger>();
				}
				return _logger;
			}
		}

		protected virtual string MeetingColumnName { get; } 

		#endregion

		#region Constructors: Public

		/// <summary>
		/// .ctor.
		/// </summary>
		public BaseCalendarEventListener() {
			Logger?.SetModelName(GetType().Name);
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Checks that the participant's current role is not email.
		/// </summary>
		/// <param name="entity"><see cref="Entity"/> instance.</param>
		/// <returns><c>True</c>, if current participant's role is not email, otherwise <c>false</c>.</returns>
		private bool GetIsMeeting(Entity entity) {
			var emailRepository = ClassFactory.Get<IEmailRepository>(new ConstructorArgument("uc", entity.UserConnection));
			return !emailRepository.CheckIsEmail(entity.GetTypedColumnValue<Guid>(MeetingColumnName));
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Checks whether an event listener action has been started from background process.
		/// </summary>
		/// <returns>
		/// <c>True</c>, if event listener action has been started from background process, 
		/// otherwise <c>false</c>.
		/// </returns>
		protected bool GetIsBackgroundProcess() {
			var accessor = ClassFactory.Get<IHttpContextAccessor>();
			var httpContext = accessor.GetInstance();
			return httpContext == null;
		}

		/// <summary>
		/// Checks conditions for doing domain action.
		/// </summary>
		/// <param name="entity"><see cref="Entity"/> instance of activity entity.</param>
		/// <param name="sender">Meeting object.</param>
		protected virtual bool IsNeedDoAction(Entity entity) {
			return ListenerUtils.GetIsFeatureEnabled("NewMeetingIntegration") && GetIsMeeting(entity); 
		}

		/// <summary>
		/// Starts meeting synchroniztion session for <paramref name="meetingId"/>.
		/// </summary>
		/// <param name="meetingId">Meeting identifier.</param>
		/// <param name="syncAction">Sync action.</param>
		/// <param name="oldColumnsValues">Columns with old values.</param>
		protected void StartMeetingSynchronization(Guid meetingId, SyncAction syncAction = default,
			Dictionary<string, object> oldColumnsValues = null) {
			var arguments = new SyncSessionArguments {
				MeetingId = meetingId,
				SyncAction = syncAction,
				SessionId = Logger?.SessionId,
				IsBackgroundProcess = GetIsBackgroundProcess()
			};
			if (oldColumnsValues != null) {
				arguments.OldColumnsValues = oldColumnsValues;
			}
			StartMeetingSynchronization(arguments);
		}

		/// <summary>
		/// Starts meeting synchroniztion session for <paramref name="meetingId"/>.
		/// <paramref name="action"/> will be aplied for <paramref name="contacts"/> calendars only.
		/// </summary>
		/// <param name="meetingId">Meeting identifier.</param>
		/// <param name="contacts">Changed participants identifiers.</param>
		/// <param name="action">Sync action.</param>
		protected void StartMeetingSynchronization(Guid meetingId, List<Guid> contactIds,
				SyncAction syncAction = SyncAction.CreateOrUpdate) {
			if (contactIds.IsEmpty()) {
				return;
			}
			StartMeetingSynchronization(new SyncSessionArguments {
				MeetingId = meetingId,
				ContactIds = contactIds.Distinct().ToList(),
				SyncAction = syncAction,
				SessionId = Logger?.SessionId,
				IsBackgroundProcess = GetIsBackgroundProcess()
			});
		}

		/// <summary>
		/// Starts meeting synchroniztion session for <paramref name="meetingId"/>.
		/// </summary>
		/// <param name="syncArgs"><see cref="SyncSessionArguments"/> instance.</param>
		protected void StartMeetingSynchronization(SyncSessionArguments syncArgs) {
			try {
				Task.StartNewWithUserConnection<CalendarSyncSession, SyncSessionArguments>(syncArgs);
				var contactsLog = syncArgs.ContactIds.Any() && !syncArgs.ContactIds.Any(x => x == null)
					? $"for contacts {string.Join(", ", syncArgs.ContactIds)}"
					: string.Empty;
				Logger?.LogInfo($"Meeting '{syncArgs.MeetingId}' synchronization scheduled {contactsLog}. Action {syncArgs.SyncAction}");
			} catch (Exception e) {
				Logger?.LogError("Calendar synchronization session start failed.", e);
			}
		}

		#endregion

	}

	#endregion

}
