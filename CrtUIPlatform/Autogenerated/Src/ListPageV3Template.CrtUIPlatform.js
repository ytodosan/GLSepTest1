﻿define("ListPageV3Template", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"type": "crt.FlexContainer",
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "small",
						"left": "large"
					},
					"direction": "row",
					"justifyContent": "space-between",
					"wrap": "nowrap",
					"alignItems": "flex-start"
				}
			},
			{
				"operation": "move",
				"name": "MainHeader",
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ActionContainer"
			},
			{
				"operation": "move",
				"name": "ActionButtonsContainer",
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "ActionButtonsContainer",
				"values": {
					"justifyContent": "end"
				}
			},
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"color": "primary",
					"icon": "add-button-icon",
					"iconPosition": "left-icon"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"gap": "none"
				}
			},
			{
				"operation": "move",
				"name": "MainContainer",
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "SectionContentWrapper",
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "DataTable",
				"parentName": "ListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"fitContent": true
				}
			},
			{
				"operation": "insert",
				"name": "Main",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"gap": "none",
					"stretch": true,
					"fitContent": false,
					"items": []
				},
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TitleContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "row",
					"justifyContent": "start",
					"alignItems": "center"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PageTitle",
				"values": {
					"type": "crt.Label",
					"caption": "$HeaderCaption",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataImportButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Data_Import)#",
					"color": "default",
					"disabled": false,
					"layoutConfig": {},
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "import-data-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_ImportFromExcel_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {}
					},
					"icon": "import-button-icon"
				},
				"parentName": "DataImportButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpenLandingDesigner",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpenLandingDesignerCaption)#",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "LandingiDesigner_Page"
						}
					},
					"icon": "webforms-button-icon"
				},
				"parentName": "DataImportButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "more-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_ExportToExcel",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_ExportToExcel_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable"
						}
					},
					"icon": "export-button-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "flex-start",
					"visible": true
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainerInner",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "large",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "small",
					"alignItems": "flex-start",
					"wrap": "nowrap",
					"visible": true
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataTable_Summaries",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"_designOptions": {
						"modelName": "PDS"
					}
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "small",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"refreshDataConfig": {
								"mode": "RefreshAll"
							}
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default",
					"visible": true
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainButtonToggleGroup",
				"values": {
					"for": "MainTabPanel",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup",
					"allowUntoggle": false,
					"toggleViewMode": "button",
					"size": "small",
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContentContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"gap": "small",
					"stretch": true,
					"fitContent": false,
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
					"alignItems": "stretch",
					"justifyContent": "start"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"sourceSchemaName": "FolderTree",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": false,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"stretch": true,
					"allowToggleClose": false,
					"selectedTab": {
						"value": "ListTabContainer"
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ListTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(ListTabContainer_caption)#",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "catalog",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ListContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"stretch": true,
					"fitContent": false
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DashboardsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(DashboardsTabContainer_caption)#",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "dashboards-icon",
					"padding": {
						"top": "extra-small",
						"right": "large",
						"bottom": "extra-small",
						"left": "large"
					}
				},
				"parentName": "MainTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DashboardsContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"stretch": true,
					"fitContent": false
				},
				"parentName": "DashboardsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Dashboards",
				"values": {
					"type": "crt.Dashboards",
					"placeholder": true,
					"_designOptions": {
						"dependencies": [],
						"filters": []
					}
				},
				"parentName": "DashboardsContainer",
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
					"HeaderCaption": {
						"value": "#ResourceString(DefaultHeaderCaption)#"
					},
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							},
							{
								"name": "SearchFilter_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"scope": "viewElement",
							"config": {}
						}
					},
					"dependencies": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
