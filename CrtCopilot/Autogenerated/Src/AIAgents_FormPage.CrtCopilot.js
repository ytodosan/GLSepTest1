define("AIAgents_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": [
						{
							"request": "crt.SaveRecordRequest"
						},
						{
							"request": "crt.SaveAccessRightsChangesRequest",
							"params": {
								"recordId": "$Id",
								"rightsSchemaName": "$RightsSchemaName",
								"accessRightsType": "$AccessRightsType",
								"accessRightsValues": "$AccessRightsValue"
							}
						}
					],
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"clicked": [
						{
							"request": "crt.CancelRecordChangesRequest"
						},
						{
							"request": "crt.CancelAccessRightsChangesRequest",
							"params": {
								"recordId": "$Id",
								"rightsSchemaName": "$RightsSchemaName",
								"accessRightsType": "$AccessRightsType"
							}
						}
					],
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SetRecordRightsButton",
				"values": {
					"caption": "#ResourceString(SetRecordRightsButton_caption)#",
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "MainHeaderBottom",
				"values": {
					"justifyContent": "end",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "SideContainer",
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"298px",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "large",
						"bottom": "none",
						"left": "extra-small"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Name",
					"labelPosition": "auto",
					"control": "$PDS_Name",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Title_placeholder)#",
					"tooltip": "#ResourceString(Title_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(Code_label)#",
					"labelPosition": "auto",
					"control": "$PDS_Code"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status",
					"labelPosition": "auto",
					"control": "$PDS_Status",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LlmModel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(LlmModel_label)#",
					"tooltip": "#ResourceString(LlmModel_tooltip)#",
					"labelPosition": "auto",
					"showList": {
						"request": "crt.ComboboxLoadDataRequest",
						"params": {
							"dataSourceName": "CopilotLlmModelDS",
							"parameters": [],
							"primaryDisplayFilterValue": "@event.filterValue",
							"additionalFilteredColumnPaths": [],
							"config": {
								"loadType": "reload"
							}
						},
						"useRelativeContext": true
					},
					"value": "$PDS_LlmModel",
					"items": "$LlmModelList",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": "$EnableMultiLlmSupport",
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RightSideContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "extra-small",
					"wrap": "nowrap"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Description_wrapper",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_Description",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Description_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "Description_wrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Description",
				"values": {
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.PDS_Description",
					"labelPosition": "hidden",
					"control": "$PDS_Description",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Description_placeholder)#",
					"tooltip": "#ResourceString(Description_tooltip)#"
				},
				"parentName": "Description_wrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Role_wrapper",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_Role",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Role_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "Role_wrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RoleDescription",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_RoleDescription",
					"labelPosition": "hidden",
					"control": "$PDS_RoleDescription",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(RoleDescription_placeholder)#",
					"tooltip": "#ResourceString(RoleDescription_tooltip)#"
				},
				"parentName": "Role_wrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Prompt_wrapper",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_Prompt",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Prompt_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "Prompt_wrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Prompt",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Prompt",
					"labelPosition": "hidden",
					"control": "$PDS_Prompt",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Prompt_placeholder)#",
					"tooltip": "#ResourceString(Prompt_tooltip)#",
					"multiline": true
				},
				"parentName": "Prompt_wrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Restrictions_wrapper",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Label_Restrictions",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Restrictions_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "Restrictions_wrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Restrictions",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Restrictions",
					"labelPosition": "hidden",
					"control": "$PDS_Restrictions",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Restrictions_placeholder)#",
					"tooltip": "#ResourceString(Restrictions_tooltip)#"
				},
				"parentName": "Restrictions_wrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubSkillsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SubSkillsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SubSkillsGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SubSkillsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubSkillsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SubSkillsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddSubSkillsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddSubSkillsBtn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {},
					"visible": true,
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "SubSkillsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateNewSubSkills",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateNewSubSkills_caption)#",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CopilotAgentSubSkill",
							"defaultValues": [
								{
									"attributeName": "ParentIntentId",
									"value": "$Id"
								},
								{
									"attributeName": "PackageUId",
									"value": "$PDS_PackageUId"
								}
							]
						}
					}
				},
				"parentName": "GridDetailAddSubSkillsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SelectExistingSubSkill",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SelectExistingSubSkill_caption)#",
					"clicked": {
						"request": "crt.CopilotSelectExistingSkillRequest",
						"params": {
							"caption": "#ResourceString(SelectExistingSubSkill_caption)#",
							"agentId": "$Id",
							"packageUId": "$PDS_PackageUId"
						}
					}
				},
				"parentName": "GridDetailAddSubSkillsBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshSubSkillsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshSubSkillsBtn_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "SubSkillsDetailDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubSkillsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubSkillsDataGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SubSkillsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubSkillsDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false,
							"toolbar": true
						},
						"columns": {
							"sorting": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$SubSkillsDetail",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "SubSkillsDetailDS_Id",
					"columns": [
						{
							"id": "ab3b73d7-2ec5-b54e-a5af-6fb20347f95c",
							"code": "SubSkillsDetailDS_Name",
							"caption": "#ResourceString(SubSkillsDetailDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "934f65bb-4ac7-76c0-5231-c4afc3b29de0",
							"code": "SubSkillsDetailDS_Description",
							"caption": "#ResourceString(SubSkillsDetailDS_Description)#",
							"dataValueType": 28,
							"width": 369
						}
					],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DeleteButton)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteSubIntentRequest",
								"params": {
									"recordId": "$SubSkillsDetail.SubSkillsDetailDS_Id",
									"parentIntentId": "$PDS_Id"
								}
							}
						}
					],
					"placeholder": false
				},
				"parentName": "SubSkillsDataGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"visible": "$IsApiMode | crt.InvertBooleanValue",
					"title": "#ResourceString(ActionsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"alignItems": "stretch"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ActionsGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ActionsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "ActionsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddActionBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddActionBtn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {},
					"visible": true,
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "ActionsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateNewAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateNewAction_caption)#",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CopilotAction",
							"defaultValues": [
								{
									"attributeName": "Intent",
									"value": "$Id"
								},
								{
									"attributeName": "Code",
									"value": "$ActionsDetail | crt.GenerateCopilotActionCode : 'ActionsDetailDS_Code'"
								},
								{
									"attributeName": "PackageUId",
									"value": "$PDS_PackageUId"
								}
							]
						}
					}
				},
				"parentName": "GridDetailAddActionBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SelectExistingProcessForAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SelectExistingProcessForAction_caption)#",
					"clicked": {
						"request": "crt.CopilotSelectExistingProcessRequest",
						"params": {
							"caption": "#ResourceString(SelectExistingProcessForAction_caption)#",
							"intentId": "$Id",
							"actionCode": "$ActionsDetail | crt.GenerateCopilotActionCode : 'ActionsDetailDS_Code'",
							"packageUId": "$PDS_PackageUId"
						}
					}
				},
				"parentName": "GridDetailAddActionBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshActionsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshActionsBtn_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "ActionsDetailDS"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "ActionsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ActionsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false,
							"toolbar": true
						},
						"columns": {
							"sorting": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$ActionsDetail",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ActionsDetailDS_Id",
					"columns": [
						{
							"id": "ab3b73d7-2ec5-b54e-a5af-6fb20347f95c",
							"code": "ActionsDetailDS_Name",
							"caption": "#ResourceString(ActionsDetailDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "934f65bb-4ac7-76c0-5231-c4afc3b29de0",
							"code": "ActionsDetailDS_Description",
							"caption": "#ResourceString(ActionsDetailDS_Description)#",
							"dataValueType": 28,
							"width": 369
						}
					],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DeleteButton)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteActionFromIntentRequest",
								"params": {
									"recordId": "$ActionsDetail.ActionsDetailDS_Id",
									"intentId": "$PDS_Id"
								}
							}
						}
					],
					"placeholder": false
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFilesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AgentFilesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": "$EnableAttachmentsUI"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "AgentFileActionGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "AgentFilesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFileActionFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "AgentFileActionGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFileAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AgentFileAddBtn_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "AgentFileList"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AgentFileActionFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFileRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AgentFileRefreshBtn_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "AgentFileListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AgentFileActionFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AgentFileGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "AgentFilesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFileList",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "IntentUId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"columns": [
						{
							"id": "72c8d0fc-f4e2-b292-81b4-a5bde5f8d291",
							"code": "AgentFileListDS_Name",
							"caption": "#ResourceString(AgentFileListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "3b87b6c0-adeb-0580-761b-d43469db9782",
							"code": "AgentFileListDS_CreatedOn",
							"caption": "#ResourceString(AgentFileListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "26f8c27b-c269-ff1a-272a-c3affd27b65a",
							"code": "AgentFileListDS_CreatedBy",
							"caption": "#ResourceString(AgentFileListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "88b39285-116f-a431-5a3d-6540a834dd17",
							"code": "AgentFileListDS_Size",
							"caption": "#ResourceString(AgentFileListDS_Size)#",
							"dataValueType": 4
						}
					],
					"items": "$AgentFileList",
					"primaryColumnName": "AgentFileListDS_Id",
					"visible": "$CardState | crt.IsEqual : 'edit'"
				},
				"parentName": "AgentFileGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AgentFileListPlaceholder",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AgentFileListPlaceholder_caption)#)#",
					"labelType": "placeholder-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": "$CardState | crt.IsEqual : 'add'"
				},
				"parentName": "AgentFilesExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccessRightsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AccessRightsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": "$EnableRightsManagementUI",
					"alignItems": "stretch"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "SchemaAccessRightBindingInstruction",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SchemaAccessRightBindingInstruction_caption)#)#",
					"labelType": "caption",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"headingLevel": "label"
				},
				"parentName": "AccessRightsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SchemaAccessRightPlaceholder",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SchemaAccessRightPlaceholder_caption)#)#",
					"labelType": "placeholder-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": "$CardState | crt.IsEqual : 'add'"
				},
				"parentName": "AccessRightsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccessRightsOutletContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$CardState | crt.IsEqual : 'edit'"
				},
				"parentName": "AccessRightsExpansionPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccessRightsOutlet",
				"values": {
					"type": "crt.SchemaOutlet",
					"schemaName": "AccessRightsDetail",
					"features": {
						"tools": {
							"canExpand": false,
							"canDesign": false
						}
					},
					"RightsSchemaName": "$RightsSchemaName",
					"RecordId": "$Id",
					"AccessRightsType": "$AccessRightsType",
					"AccessRightsValue": "$AccessRightsValue",
					"ShowExpands": "$ShowExpands",
					"visible": true
				},
				"parentName": "AccessRightsOutletContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"LlmModelList": {
						"isCollection": true,
						"modelConfig": {
							"path": "CopilotLlmModelDS",
							"sortingConfig": {
								"default": []
							},
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"value": {
									"modelConfig": {
										"path": "CopilotLlmModelDS.Id"
									}
								},
								"displayValue": {
									"modelConfig": {
										"path": "CopilotLlmModelDS.Name"
									}
								}
							}
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						},
						"change": {
							"request": "crt.GenerateAgentCodeValueRequest",
							"params": {
								"valueAttributeName": "PDS_Name",
								"codeAttributeName": "PDS_Code"
							}
						}
					},
					"PDS_Code": {
						"modelConfig": {
							"path": "PDS.Code"
						},
						"validators": {
							"CodeMaxLength": {
								"type": "crt.MaxLength",
								"params": {
									"maxLength": 41
								}
							},
							"CodePrefixValidator": {
								"type": "crt.SchemaNamePrefix"
							},
							"CodeAllowedSymbolsValidator": {
								"type": "crt.SchemaNameAllowedSymbols"
							}
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_LlmModel": {
						"modelConfig": {
							"path": "PDS.LlmModel"
						}
					},
					"PDS_Prompt": {
						"modelConfig": {
							"path": "PDS.Prompt"
						}
					},
					"PDS_PackageUId": {
						"modelConfig": {
							"path": "PDS.PackageUId"
						}
					},
					"PDS_Restrictions": {
						"modelConfig": {
							"path": "PDS.Restrictions"
						}
					},
					"PDS_RoleDescription": {
						"modelConfig": {
							"path": "PDS.RoleDescription"
						}
					},
					"ActionsDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "ActionsDetailDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ActionsDetail_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ActionsDetailDS_Name": {
									"modelConfig": {
										"path": "ActionsDetailDS.Name"
									}
								},
								"ActionsDetailDS_Code": {
									"modelConfig": {
										"path": "ActionsDetailDS.Code"
									}
								},
								"ActionsDetailDS_Description": {
									"modelConfig": {
										"path": "ActionsDetailDS.Description"
									}
								},
								"ActionsDetailDS_Id": {
									"modelConfig": {
										"path": "ActionsDetailDS.Id"
									}
								}
							}
						}
					},
					"ActionsDetail_PredefinedFilter": {
						"value": null
					},
					"SubSkillsDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "SubSkillsDetailDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "SubSkillsDetail_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"SubSkillsDetailDS_Name": {
									"modelConfig": {
										"path": "SubSkillsDetailDS.Name"
									}
								},
								"SubSkillsDetailDS_Description": {
									"modelConfig": {
										"path": "SubSkillsDetailDS.Description"
									}
								},
								"SubSkillsDetailDS_Id": {
									"modelConfig": {
										"path": "SubSkillsDetailDS.Id"
									}
								}
							}
						}
					},
					"SubSkillsDetail_PredefinedFilter": {
						"value": null
					},
					"AgentFileList": {
						"isCollection": true,
						"modelConfig": {
							"path": "AgentFileListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "AgentFileList_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"AgentFileListDS_Name": {
									"modelConfig": {
										"path": "AgentFileListDS.Name"
									}
								},
								"AgentFileListDS_CreatedOn": {
									"modelConfig": {
										"path": "AgentFileListDS.CreatedOn"
									}
								},
								"AgentFileListDS_CreatedBy": {
									"modelConfig": {
										"path": "AgentFileListDS.CreatedBy"
									}
								},
								"AgentFileListDS_Size": {
									"modelConfig": {
										"path": "AgentFileListDS.Size"
									}
								},
								"AgentFileListDS_Id": {
									"modelConfig": {
										"path": "AgentFileListDS.Id"
									}
								}
							}
						}
					},
					"AgentFileList_PredefinedFilter": {
						"value": {
							"items": {
								"IntentUIdFilter": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "IntentUId"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 0,
											"value": "00000000-0000-0000-0000-000000000000"
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "CreatioAIIntentFile"
						}
					},
					"EnableRightsManagementUI": {
						"value": false
					},
					"RightsSchemaName": {
						"value": "CopilotIntentSchemaManager"
					},
					"AccessRightsType": {
						"value": "schema"
					},
					"AccessRightsValue": {
						"modelConfig": {
							"path": "PageParameters.AccessRightsValue"
						}
					},
					"ShowExpands": {
						"value": false
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"ActionsDetailDS": [
							{
								"attributePath": "Intent",
								"relationPath": "PDS.Id"
							}
						],
						"SubSkillsDetailDS": [
							{
								"attributePath": "Intent",
								"relationPath": "PDS.Id"
							}
						],
						"AgentFileListDS": [],
						"CopilotLlmModelDS": []
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.CopilotIntentDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "CopilotAgent",
							"attributes": {
								"Id": {
									"path": "Id"
								},
								"Name": {
									"path": "Name"
								},
								"Description": {
									"path": "Description"
								},
								"Status": {
									"path": "Status"
								},
								"LlmModel": {
									"path": "LlmModel"
								},
								"Prompt": {
									"path": "Prompt"
								},
								"PackageUId": {
									"path": "PackageUId"
								},
								"RoleDescription": {
									"path": "RoleDescription"
								},
								"Restrictions": {
									"path": "Restrictions"
								}
							}
						}
					},
					"ActionsDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotAction",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Description": {
									"path": "Description"
								},
								"Code": {
									"path": "Code"
								}
							}
						}
					},
					"SubSkillsDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotAgentSubSkill",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Description": {
									"path": "Description"
								}
							}
						}
					},
					"AgentFileListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CreatioAIIntentFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"CopilotLlmModelDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LlmModel",
							"attributes": {
								"Id": {
									"path": "Id"
								},
								"Name": {
									"path": "Name"
								},
								"Code": {
									"path": "Code"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
