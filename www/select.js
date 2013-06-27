"use strict";

var input, output;

var db;

function init()
{
	input = localStorage.getItem("input");
	output = document.getElementById("output");
	
	db = new ImprovedDatabase("data", "adatok", 1024 * 1024 * 5);
	
	displayList();
}

function output_results(result)
{
	var concatenated_result = "";
	
	for (var i = 0; i < result.rows.length; i++)
	{
		var currentResult = result.rows.item(i);
		concatenated_result += "<span onclick='select("+ currentResult.id +")'>" + currentResult.name + " ("+ currentResult.class +")" +"</span><br />";
	}
	
	output.innerHTML = concatenated_result;
}

function displayList()
{
	db.sqlQuery("SELECT * FROM `people` WHERE `name` LIKE '%" + input + "%'", output_results);
}

function select(id)
{
	localStorage.setItem("id", id);
	window.location = "display.html";
}