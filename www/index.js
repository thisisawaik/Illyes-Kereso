"use strict";

var input, submit_button;
var create_button, populate_button;

var db;

function init()
{
	global_init();
	
	input = document.getElementById("input");
	submit_button = document.getElementById("submit");
	
	create_button = document.getElementById("create");
	populate_button = document.getElementById("populate");
	
	submit_button.addEventListener("click", search, false);
	create_button.addEventListener("click", create, false);
	populate_button.addEventListener("click", populate, false);
}

function search()
{
	localStorage.setItem("input", input.value);
	window.location = "select.html";
}