"use strict";

function create()
{
	var tables = [];
	
	for(var currentTable in data.tables)
	{
		tables.push(currentTable);
		
		var query = "CREATE TABLE IF NOT EXISTS `" + currentTable + "` (";
		
		var empty = true;
		
		for(var currentColumn in data.tables[currentTable].columns)
		{
			query += "`" + currentColumn + "` " + data.tables[currentTable].columns[currentColumn] + ", ";
			empty = false;
		}
		
		if(!empty)
		{
			query = query.slice(0, -2);
		}
		
		query += ")";
		
		console.log(query);
		
		db.sqlQuery(query);
		
		for(var i = 0; i < data.tables[currentTable].rows.length; i++)
		{
			var columns = "";
			var values = "";
			
			var empty = true;
			
			for(var currentColumn in data.tables[currentTable].rows[i])
			{
				columns += "`" + currentColumn + "`, ";
				values += typeof data.tables[currentTable].rows[i][currentColumn] == "string" ?
					"'" + data.tables[currentTable].rows[i][currentColumn] + "', " :
					data.tables[currentTable].rows[i][currentColumn] + ", ";
				
				empty = false;
			}
			
			if(!empty)
			{
				columns = columns.slice(0, -2);
				values = values.slice(0, -2);
			}
			
			db.sqlQuery("INSERT INTO `" + currentTable + "` (" + columns + ") VALUES (" + values + ")");
		}
	}
	
	localStorage.setItem("tables", JSON.stringify(tables));
}

function recreate()
{
	var tables = JSON.parse(localStorage.getItem("tables"));
	
	for (var i = 0; i < tables.length; i++)
	{
		db.sqlQuery("DROP TABLE `" + tables[i] + "`");
	}
	
	create();
}