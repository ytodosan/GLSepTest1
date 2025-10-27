﻿namespace Terrasoft.Configuration.DataForge
{
	using Creatio.FeatureToggling;
	using global::Common.Logging;
	using System.Linq;
	using System.Threading;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using static Terrasoft.Configuration.DataForge.DataForgeFeatures;

	#region Class: DataForgeEventListener

	/// <summary>
	/// Application event listener for DataForge service.
	/// Handles application lifecycle events and subscribes to schema changes when real-time sync is enabled.
	/// </summary>
	public class DataForgeEventListener : IAppEventListener
	{
		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("DataForge");

		private IDataForgeService _dataForgeService;
		private AppEventContext _appEventContext;
		private AppConnection _appConnection;
		private UserConnection _userConnection;

		#endregion

		#region Properties: Private

		private AppConnection AppConnection {
			get {
				if (_appConnection == null) {
					_appConnection = _appEventContext.Application["AppConnection"] as AppConnection;
				}
				return _appConnection;
			}
		}

		private UserConnection UserConnection {
			get {
				if (_userConnection == null) {
					_userConnection = AppConnection.SystemUserConnection;
				}
				return _userConnection;
			}
		}

		#endregion

		#region Methods: Private

		private void OnItemSaved(object sender, SchemaManagerItemAfterSaveEventArgs e) {
			_log.Info($"On Item Saved: {e.Item.Name}");

			if (!Features.GetIsEnabled<RealtimeSchemaSync>()) {
				return;
			}

			_log.Info($"Uploading entity: {e.Item.Name}");
			_dataForgeService.UploadEntity(e.Item as ISchemaManagerItem<EntitySchema>);
		}

		private void OnItemRemoved(object sender, SchemaManagerItemAfterRemoveEventArgs e) {
			_log.Info($"On Item Removed: {e.Item.Name}");

			if (!Features.GetIsEnabled<RealtimeSchemaSync>()) {
				return;
			}

			_log.Info($"Removing entity: {e.Item.Name}");
			_dataForgeService.RemoveEntity(e.Item as ISchemaManagerItem<EntitySchema>);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Handles application start event.
		/// Initializes dependencies and subscribes to schema modification events if real-time sync is enabled.
		/// </summary>
		/// <param name="context">Application event context.</param>
		public void OnAppStart(AppEventContext context) {
			_appEventContext = context;
			_dataForgeService = ClassFactory.Get<IDataForgeServiceFactory>().Create();

			UserConnection.EntitySchemaManager.ItemSaved += OnItemSaved;
			UserConnection.EntitySchemaManager.ItemRemoved += OnItemRemoved;

			if (Features.GetIsEnabled<BulkSchemaSync>()) {
				_log.Info("Checking data structure state after application start");
				DataForgeCheckTablesResponse response = _dataForgeService.CheckTablesState();
				if (response.Success) {
					if (response.TableNames.Count > 0) {
						_log.Info($"Uploading data structure after application start, {response.TableNames.Count} tables found");
						var schemaManager = UserConnection.EntitySchemaManager;
						var items = response.TableNames
							.Select(name => schemaManager.FindItemByName(name))
							.Where(item => item != null)
							.ToArray();
						_log.Info($"Uploading data structure after application start");
						_dataForgeService.UploadDataStructure(CancellationToken.None, items);
					} else {
						_log.Info("No tables to upload after application start");
					}
				}
			}

			if (Features.GetIsEnabled<BulkLookupSync>()) {
				_log.Info("Checking lookups state after application start");
				DataForgeCheckLookupsResponse checkLookupsResponse = _dataForgeService.CheckLookupsState();
				if (checkLookupsResponse.Success) {
					if (checkLookupsResponse.LookupIds.Count > 0) {
						_log.Info($"Uploading lookups after application start, {checkLookupsResponse.LookupIds.Count} lookups found");
						_dataForgeService.UploadLookups(checkLookupsResponse.LookupIds);
					} else {
						_log.Info($"No lookups to upload after application start, {checkLookupsResponse.LookupIds.Count} lookups found");
					}
				}
			}
		}

		/// <summary>
		/// Handles application end event.
		/// Unsubscribes from schema modification events to clean up resources.
		/// </summary>
		/// <param name="context">Application event context.</param>
		public void OnAppEnd(AppEventContext context) {
			UserConnection.EntitySchemaManager.ItemSaved -= OnItemSaved;
			UserConnection.EntitySchemaManager.ItemRemoved -= OnItemRemoved;
		}

		/// <summary>
		/// Handles session start event.
		/// Currently no operation.
		/// </summary>
		/// <param name="context">Application event context.</param>
		public void OnSessionStart(AppEventContext context) {
			// No operation (reserved for future use).
		}

		/// <summary>
		/// Handles session end event.
		/// Currently no operation.
		/// </summary>
		/// <param name="context">Application event context.</param>
		public void OnSessionEnd(AppEventContext context) {
			// No operation (reserved for future use).
		}

		#endregion
	}

	#endregion
}

