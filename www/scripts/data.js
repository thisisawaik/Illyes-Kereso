"use strict";

var data = {
	
	"tables": {
	
		"students": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"name": "TEXT",
				"class": "TEXT",
				"groups": "TEXT"
			},
			
			"rows": [
				{"name": "Donkó István", "class": "10.a", "groups": "|2|3|4|"},
				{"name": "Geiszl András", "class": "10.a", "groups": "|2|3|"},
				{"name": "Gergály Benedek", "class": "8.a", "groups": "|1|"},
				{"name": "Inges Tamás", "class": "10.a", "groups": "|2|3|"}
			]
		},
		
		"groups": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"name": "TEXT",
			},
			
			"rows": [
				{"name": "8.a"},
				{"name": "10.a"},
				{"name": "10.a Angol A"},
				{"name": "10. Olasz"}
			]
		},
		
		"teachers": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"name": "TEXT",
			},
			
			"rows": [
				{"name": "Heitzmann Ildikó"},
				{"name": "Karlik Zsuzsa"}
			]
		},
		
		"lessons": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"teacher": "INTEGER",
				"day": "INTEGER",
				"time": "INTEGER",
				"subject": "TEXT",
				"groups": "TEXT",
				"room": "TEXT"
			},
			
			"rows": [
				{"teacher": 1, "day": 1, "time": 2, "subject": "Informatika", "groups": "|1|4|", "room": "124"},
				{"teacher": 1, "day": 2, "time": 1, "subject": "Informatika", "groups": "|1|4|", "room": "124"},
				{"teacher": 1, "day": 3, "time": 2, "subject": "Informatika", "groups": "|1|4|", "room": "124"},
				{"teacher": 1, "day": 4, "time": 1, "subject": "Informatika", "groups": "|1|4|", "room": "124"},
				{"teacher": 1, "day": 5, "time": 2, "subject": "Informatika", "groups": "|1|4|", "room": "124"},
				
				{"teacher": 2, "day": 2, "time": 3, "subject": "Kémia", "groups": "|3|4|", "room": "112"},
				{"teacher": 2, "day": 4, "time": 1, "subject": "Kémia", "groups": "|1|4|", "room": "112"},
				{"teacher": 2, "day": 5, "time": 2, "subject": "Kémia", "groups": "|3|", "room": "112"}
			]
		},
		
		"times": {
			
			"columns": {
				"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
				"count": "INTEGER",
				"time": "TEXT"
			},
			
			"rows": [
				{"count": 0, "time": "7:25-8:10"},
				{"count": 1, "time": "8:15-9:00"},
				{"count": 2, "time": "9:10-9:55"},
				{"count": 3, "time": "10:15-11:00"},
				{"count": 4, "time": "11:10-11:55"},
				{"count": 5, "time": "12:05-12:50"},
				{"count": 6, "time": "13:00-13:45"},
				{"count": 6, "time": "13:25-14:10"},
				{"count": 7, "time": "14:15-15:00"}
			]
		}
	}
}