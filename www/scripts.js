"use strict";

var input, submit_button, output;
var create_button, populate_button;

var db;

function init()
{
	input = document.getElementById("input");
	submit_button = document.getElementById("submit");
	output = document.getElementById("output");
	
	create_button = document.getElementById("create");
	populate_button = document.getElementById("populate");
	
	submit_button.addEventListener("click", search, false);
	create_button.addEventListener("click", create, false);
	populate_button.addEventListener("click", populate, false);
	
	db = new ImprovedDatabase("data", "adatok", 1024 * 1024 * 5);
}

function output_results(result)
{
	var concatenated_result = "";
	
	for (var i = 0; i < result.rows.length; i++)
	{
		var currentResult = result.rows.item(i);
		concatenated_result += currentResult.name + " ("+ currentResult.class +")" +", ";
	}
	
	output.innerHTML = concatenated_result;
}

function search()
{
	db.sqlQuery("SELECT * FROM `people` WHERE `name` LIKE '%" + input.value + "%'", output_results);
}