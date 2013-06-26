"use strict";

function create()
{
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `people` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name`, `class`)");
}

function populate()
{
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Andris', '10.a')");
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Benedek', '8.a')");
	db.sqlQuery("INSERT INTO `people` (`name`, `class`) VALUES ('Isti', '10.a')");
}