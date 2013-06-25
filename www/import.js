"use strict";

function create()
{
	db.sqlQuery("CREATE TABLE IF NOT EXISTS `people` (`id`, `name`)");
}

function populate()
{
	db.sqlQuery("INSERT INTO `people` (`id`, `name`) VALUES (1, 'Isti')");
}