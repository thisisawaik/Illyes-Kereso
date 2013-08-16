"use strict";

var id, type;

var db;

function init()
{
	global_init();
	
	id = localStorage.getItem("id");
	type = localStorage.getItem("type")
	
	display();
}

function displayClasses(result)
{
	var output = "";
	
	for(var i = 0; i < result.rows.length; i++)
	{
		var currentClass = result.rows.item(i);
		
		output += "<span style='color: #FFFFFF'>" + classes[currentClass.time].toString() + " | " + currentClass.subject + " | " + currentClass.room + "</span>";
		console.log(currentClass);
	}
	
	document.getElementById("todaysClasses").innerHTML = output;
}

function displayData(result)
{
	var currentPerson = result.rows.item(0);

	if(type == "student")
	{
		document.getElementById("name").innerHTML += currentPerson.name + " " + currentPerson.class;
	}
	else
	{
		document.getElementById("name").innerHTML += currentPerson.name;
	}

	console.log(currentPerson.class);
	
	var date = new Date();
	document.getElementById("date").innerHTML += dayNames[date.getDay()];
	
	if(type == "teacher")
	{
		db.sqlQuery("SELECT * FROM lessons WHERE teacher = " + id + " AND day = " + date.getDay(), displayClasses);
	}
	
	if(type == "student")
	{
		var groups = currentPerson.groups.split("|").slice(1, -1);
		
		if(groups.length == 0)
		{
			alert("Nem tagja egy csoportnak sem!");
			return false;
		}
		
		var query = "SELECT * FROM lessons WHERE (";
		
		for(var i = 0; i < groups.length; i++)
		{
			query += " groups LIKE '%|" + groups[i] + "|%' OR"
		}
		
		query = query.slice(0, -2);
		
		query += ") AND day = " + date.getDay();
		
		db.sqlQuery(query, displayClasses);
	}
}

function display()
{
	db.sqlQuery("SELECT * FROM " + type + "s WHERE id = " + id, displayData);
}