"use strict";

var db;

function init()
{
	db = new ImprovedDatabase("orarend", "adatok", 1024 * 1024 * 5);
}