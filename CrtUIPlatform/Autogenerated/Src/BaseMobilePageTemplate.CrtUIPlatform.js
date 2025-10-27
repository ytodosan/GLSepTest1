﻿{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "Scaffold",
			"values": {
				"leadingWidth": 100,
				"floatAction": {
					"name": "FloatingActionButton",
					"type": "crt.FloatingActionButton",
					"icon": "more-vertical-button-icon",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"menuItems": [
						{
							"name": "FloatingActionButtonCopyMenuItem",
							"type": "crt.MenuItem",
							"caption": "#ResourceString(CopyMenuItem_caption)#",
							"clicked": {
								"request": "crt.CopyRecordRequest"
							}
						},
						{
							"name": "FloatingActionButtonDeleteMenuItem",
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DeleteMenuItem_caption)#",
							"clicked": {
								"request": "crt.DeleteRecordRequest"
							}
						}
					]
				}
			}
		},
		{
			"operation": "merge",
			"name": "CloseButton",
			"values": {
				"visible": "$HasUnsavedData | crt.InvertBooleanValue"
			}
		},
		{
			"operation": "merge",
			"name": "MainContainer",
			"values": {
				"alignItems": "stretch",
				"padding": {
					"left": "small",
					"top": "small",
					"bottom": "none",
					"right": "small"
				},
				"visible": true,
				"borderRadius": "none",
				"justifyContent": "start",
				"gap": "medium",
				"wrap": "nowrap"
			}
		},
		{
			"operation": "insert",
			"name": "CancelButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(CancelButton_caption)#",
				"size": "medium",
				"visible": "$HasUnsavedData",
				"clicked": {
					"request": "crt.CancelRecordChangesRequest"
				}
			},
			"parentName": "Scaffold",
			"propertyName": "leading",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "SaveButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(SaveButton_caption)#",
				"size": "medium",
				"visible": "$HasUnsavedData",
				"clicked": {
					"request": "crt.SaveRecordRequest"
				}
			},
			"parentName": "Scaffold",
			"propertyName": "actions",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AreaProfileContainer",
			"values": {
				"type": "crt.FlexContainer",
				"direction": "column",
				"items": [],
				"fitContent": true,
				"visible": true,
				"color": "primary",
				"borderRadius": "medium",
				"padding": {
					"top": "medium",
					"right": "medium",
					"bottom": "medium",
					"left": "medium"
				},
				"alignItems": "stretch",
				"justifyContent": "start",
				"gap": "medium",
				"wrap": "nowrap"
			},
			"parentName": "MainContainer",
			"propertyName": "items",
			"index": 0
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"CardState": {}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {}
			}
		}
	]
}