"use strict";

function create()
{
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `people` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name`, `class`)");
	
	var tables = ["people"];
	localStorage.setItem("tables", JSON.stringify(tables));
}

function populate()
{
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Andris', '10.a')");
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Benedek', '8.a')");
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Isti', '10.a')");
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