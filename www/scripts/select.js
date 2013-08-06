"use strict";

var input, output;

var db;

function init()
{
	global_init();
	
	input = localStorage.getItem("input");
	output = document.getElementById("output");
	
	displayList();
}

function output_results(result)
{
	var concatenated_result = "";
	
	for (var i = 0; i < result.rows.length; i++)
	{
		var currentResult = result.rows.item(i);
		concatenated_result += "<li class='results' onclick='select("+ currentResult.id +")'>" + currentResult.name + " (" + currentResult.class + ")" + "</li>";
	}
	
	output.innerHTML = concatenated_result;
}

function displayList()
{
	var toSearch = "";
	
	for (var i = 0; i < input.length; i++)
	{
		toSearch += input[i] + '%';
	}
	
	db.sqlQuery("SELECT * FROM `people` WHERE `name` LIKE '%" + toSearch + "'", output_results);
}

function select(id)
{
	localStorage.setItem("id", id);
	window.location = "display.html";
}