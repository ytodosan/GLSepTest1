﻿ namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: CreatioAlmIntegrationInstallScript

	public class CreatioAlmIntegrationInstallScript : IInstallScriptExecutor {

		#region Methods: Private

		private static void UpdateNameField(UserConnection userConnection, string entityName) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity entity = entitySchemaManager.GetEntityByName(entityName, userConnection);
			const string oldValue = "ALM integration";
			const string newValue = "Creatio ALM Integration";
			var entityConditions = new Dictionary<string, object> {
				{ "Name", oldValue }
			};
			if (!entity.FetchFromDB(entityConditions)){
				return;
			}
			entity.SetColumnValue("Name", newValue);
			entity.Save(false);
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			UpdateNameField(userConnection, "Contact");
			UpdateNameField(userConnection, "SysAdminUnit");
		}

		#endregion
	}

	#endregion
}

