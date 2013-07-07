"use strict";

function create()
{
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `teachers` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT)");
	// db.sqlQuery("CREATE TABLE IF NOT EXISTS `students` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT, `class` TEXT)");
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `times` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `count` INTEGER, `time` TEXT)");
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `classes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `teacher` INTEGER, `time` INTEGER, `subject` TEXT, `classroom` TEXT)");
	
	var tables = ["teachers"/*, "students"*/, "classes"];
	localStorage.setItem("tables", JSON.stringify(tables));
}

function populate()
{
	// db.sqlQuery("INSERT INTO `students` (`name`, `class`) VALUES ('Andris', '10.a')");
	// db.sqlQuery("INSERT INTO `students` (`name`, `class`) VALUES ('Benedek', '8.a')");
	// db.sqlQuery("INSERT INTO `students` (`name`, `class`) VALUES ('Isti', '10.a')");
	
	for (var i=0; i<25; i++)
	{
		db.sqlQuery("INSERT INTO `teachers` (`name`) VALUES ('"+"testtanar"+i+"')");
	}
	
	db.sqlQuery("INSERT INTO `classes` (`teacher`, `time`, `subject`, `classroom`) VALUES (1, 3, 'Irodalom', '103')");
}

function recreate()
{
	var tables = JSON.parse(localStorage.getItem("tables"));
	
	for (var i = 0; i < tables.length; i++)
	{
		db.sqlQuery("DROP TABLE `" + tables[i] + "`");
	}
	
	create();
	populate();
}