"use strict";

function ImprovedDatabase(name, description, size)
{
	this.database = openDatabase(name, "0.0", description, size);
	
	this.sqlQuery = function(query, resultProcessor)
	{
		if(resultProcessor == undefined)
		{
			resultProcessor = function(result){console.log(result.rows);};
		}
		
		this.database.transaction
		(
			function(ta)
			{
				ta.executeSql(query, [], function(ta, rs){resultProcessor(rs);});
			}, 
			
			function(er)
			{
				console.log(er);
			}
		);
		
		return query  + " -> " + resultProcessor;
	};
}