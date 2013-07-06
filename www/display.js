"use strict";

var id;

var db;

function init()
{
	global_init();
	
	id = localStorage.getItem("id");
	
	display();
}

function display_data(result)
{
	document.getElementById("name").innerHTML += result.rows.item(0).name;
}

function display()
{
	db.sqlQuery("SELECT * FROM `people` WHERE `id` = " + id, display_data);
