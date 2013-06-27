"use strict";

var id;

var db;

function init()
{
	id = localStorage.getItem("id");
	
	db = new ImprovedDatabase("data", "adatok", 1024 * 1024 * 5);
	
	display();
}

function display_data(result)
{
	document.getElementById("data").innerHTML += result.rows.item(0).name;
}

function display()
{
	db.sqlQuery("SELECT * FROM `people` WHERE `id` = " + id, display_data);
}