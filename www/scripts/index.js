"use strict";

var dbVersion = 0.498;

var input, output, submit_button;
// var create_button, populate_button;

var db;

function init()
{
	document.getElementById("input").value = "";
	
	global_init();
	
	if(!localStorage.getItem("wasrun"))
	{
		create();
		
		localStorage.setItem("wasrun", true);
		localStorage.setItem("dbVersion", dbVersion);
	}
	
	if(localStorage.getItem("dbVersion") < dbVersion)
	{
		recreate();
		localStorage.setItem("dbVersion", dbVersion);
	}
	
	input = document.getElementById("input");
	output = document.getElementById("output");
	submit_button = document.getElementById("submit");
	
	// create_button = document.getElementById("create");
	// populate_button = document.getElementById("populate");
	
	input.addEventListener("keyup", function(){displayList(input.value);}, false);
	
	submit_button.addEventListener("click", search, false);
	// create_button.addEventListener("click", create, false);
	// populate_button.addEventListener("click", populate, false);
}

function search()
{
	displayList(input.value);
	//localStorage.setItem("input", input.value);
	//window.location = "select.html";
}

function displayList(searchInput)
{
	var toSearch = "";
	
	if (searchInput.length != 0)
	{
		for (var i = 0; i < searchInput.length; i++)
		{
			toSearch += searchInput[i] + '%';
		}
		
		db.sqlQuery("SELECT id, 'student' AS type, name, class FROM students WHERE name LIKE '%" + toSearch +
			"' UNION SELECT id, 'teacher' AS type, name, 'Tanár' AS class FROM teachers WHERE name LIKE '%" + toSearch + "' ORDER BY name", output_results);
	}
	
	else
	{
		output.innerHTML="";
	}
}

function output_results(result)
{
	var concatenated_result = "";
	
	for (var i = 0; i < result.rows.length; i++)
	{
		var currentResult = result.rows.item(i);
		
		if(i == result.rows.length - 1)
		{
			concatenated_result += "<li class='suggestion last' ";
		}
		
		else
		{
			concatenated_result += "<li class='suggestion' ";
		}
		
		concatenated_result += "onclick='select(" + currentResult.id + ", \"" + currentResult.type + "\")'>" + currentResult.name + " (" + currentResult.class + ")" + "</li>";
	}
	
	output.innerHTML = concatenated_result;
}

function select(id, type)
{
	localStorage.setItem("id", id);
	localStorage.setItem("type", type);
	window.location = "display.html";
}