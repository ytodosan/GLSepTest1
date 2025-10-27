{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "Scaffold",
			"values": {
				"actions": [
					{
						"type": "crt.Button",
						"clicked": {
							"request": "crt.OpenSearchListRequest",
							"params": {
								"itemsAttributeName": "Items"
							}
						},
						"icon": "magnifying-glass-icon",
						"name": "SearchButton"
					}
				],
				"floatAction": {
					"type": "crt.FloatingActionButton",
					"clicked": {
						"request": "crt.CreateRecordRequest"
					},
					"icon": "add-button-icon",
					"name": "CreateRecordButton"
				}
			}
		},
		{
			"operation": "insert",
			"name": "HeaderContainer",
			"values": {
				"type": "crt.FlexContainer",
				"direction": "row",
				"wrap": "wrap",
				"gap": 12,
				"padding": {"left": "medium", "top": 4, "bottom": 4, "right": "medium"},
				"items": []
			},
			"parentName": "MainContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ListContainer",
			"values": {
				"type": "crt.FlexContainer",
				"color": "primary",
				"borderRadius": "large",
				"items": []
			},
			"parentName": "MainContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "List",
			"values": {
				"type": "crt.List",
				"items": "$Items",
				"itemLayout": {
					"name": "ListItem",
					"type": "crt.ListItem",
					"subtitles": [],
					"body": [],
					"showEmptyValues": true
				}
			},
			"parentName": "ListContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "FilterGroupButton",
			"values": {
				"type": "crt.Button",
				"color": "secondary",
				"size": "medium",
				"clicked": {
					"request": "crt.UpdateQuickFilterGroupRequest",
					"params": {
						"value": "$QuickFilterGroup_Value",
						"actions": [],
						"updated": {
							"request": "crt.QuickFilterGroupRequest",
							"params": {
								"target": "QuickFilterGroup"
							}
						}
					}
				},
				"icon": "filter-add-icon"
			},
			"parentName": "HeaderContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "SortButton",
			"values": {
				"type": "crt.Sort",
				"value": "$ItemsSorting",
				"items": "$Items",
				"valueChange": {
					"request": "crt.SortChangeRequest"
				}
			},
			"parentName": "HeaderContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "FolderTreeActions",
			"values": {
				"type": "crt.FolderTreeActions",
				"caption": "#ResourceString(FolderTreeActions_caption)#",
				"sourceSchemaName": "FolderTree",
				"_filterOptions": {
					"expose": [
						{
							"attribute": "FolderTreeActions_active_folder_filter",
							"converters": [
								{
									"converter": "crt.FolderTreeActiveFilterAttributeConverter", "args": []
								}
							]
						}
					],
					"from": [ "FolderTreeActions_active_folder_id", "FolderTreeActions_active_folder_filter_data" ]
				}
			},
			"parentName": "HeaderContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "QuickFilterGroup",
			"values": {
				"type": "crt.QuickFilterGroup",
				"_filterOptions": {
					"expose": [
						{
							"attribute": "QuickFilterGroup_Filters",
							"converters": [
								{
									"converter": "crt.QuickFilterGroupAttributeConverter",
									"args": [
										{
											"target": {
												"viewAttributeName": "Items",
												"items": {}
											}
										}
									]
								}
							]
						}
					],
					"from": "QuickFilterGroup_Value"
				},
				"items": []
			},
			"parentName": "HeaderContainer",
			"propertyName": "items",
			"index": 3
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"QuickFilterGroup_Value": {},
				"Items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {}
					},
					"modelConfig": {
						"path": "PDS",
						"sortingConfig": {
							"default": [],
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"name": "QuickFilterGroup_Filters",
								"loadOnChange": true
							},
							{
								"name": "FolderTreeActions_active_folder_filter",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {
					"value": [
						{
							"direction": "desc",
							"columnName": "ModifiedOn"
						}
					]
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {}
					}
				}
			}
		}
	]
}