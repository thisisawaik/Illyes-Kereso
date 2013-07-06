"use strict";

var version = 0.1;

var input, output, submit_button;
// var create_button, populate_button;

var db;

function init()
{
	global_init();
	
	if(!localStorage.getItem("wasrun"))
	{
		create();
		populate();
		
		localStorage.setItem("wasrun", true);
		localStorage.setItem("version", version);
	}
	
	if(localStorage.getItem("version") > version)
	{
		recreate();
	}
	
	input = document.getElementById("input");
	output = document.getElementById("output");
	submit_button = document.getElementById("submit");
	
	// create_button = document.getElementById("create");
	// populate_button = document.getElementById("populate");
	
	input.addEventListener("keyup", function(){displayList(input.value);console.log("sajt");}, false);
	
	submit_button.addEventListener("click", search, false);
	// create_button.addEventListener("click", create, false);
	// populate_button.addEventListener("click", populate, false);
}

function search()
{
	localStorage.setItem("input", input.value);
	window.location = "select.html";
}

function displayList(searchInput)
{
	var toSearch = "";
	
	for (var i = 0; i < searchInput.length; i++)
	{
		toSearch += searchInput[i] + '%';
	}
	
	db.sqlQuery("SELECT * FROM `people` WHERE `name` LIKE '%" + toSearch + "'", output_results);
}

function output_results(result)
{
	var concatenated_result = "";
	
	for (var i = 0; i < result.rows.length; i++)
	{
		var currentResult = result.rows.item(i);
		concatenated_result += "<li class='suggestions' onclick='select("+ currentResult.id +")'>" + currentResult.name + " ("+ currentResult.class +")" +"</li>";
	}
	
	output.innerHTML = concatenated_result;
}

function select(id)
{
	localStorage.setItem("id", id);
	window.location = "display.html";
}