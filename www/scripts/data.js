"use strict";

var data = {
	
	"tables": {
	
		"people": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"name": "TEXT",
				"groups": "TEXT"
			},
			
			"rows": [
				{"name": "Donkó István", "groups": "1,2,3,4,5"},
				{"name": "Geiszl András", "groups": "3,4,5"},
				{"name": "Gergály Benedek", "groups": "1,2,3"}
			]
		},
		
		"lessons": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"teacher": "INTEGER",
				"time": "INTEGER",
				"subject": "TEXT",
				"groups": "TEXT",
				"room": "TEXT"
			},
			
			"rows": [
				
			]
		},
		
		"times": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"count": "INTEGER",
				"time": "TEXT"
			},
			
			"rows": [
				{"count": 0, "time": "7:25-8:10"}
			]
		},
		
		"asdf": {
			
			"columns": {
				
			},
			
			"rows": [
				
			]
		}
	}
}