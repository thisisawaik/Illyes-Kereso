"use strict";

var isPhoneGap = false;

var dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];

var classes = 
	[
		new class_time(0, "7:25", "8:10"),
		new class_time(1, "8:15", "9:00"),
		new class_time(2, "9:10", "9:55"),
		new class_time(3, "10:15", "11:00"),
		new class_time(4, "11:10", "11:55"),
		new class_time(5, "12:05", "12:50"),
		new class_time(6, "13:00", "13:45"),
		new class_time(6, "13:25", "14:10"),
		new class_time(7, "14:15", "15:00")
	];

function global_init()
{
	document.addEventListener("deviceready", function(){isPhoneGap = true;alert("running on phonegap!");}, false);
	
	db = new ImprovedDatabase("data", "adatok", 1024 * 1024 * 5);
}

function class_time(no, start, end)
{
	this.no = no;
	this.start = {hours:start.split(":")[0], minutes:start.split(":")[1]};
	this.end = {hours:end.split(":")[0], minutes:end.split(":")[1]};
	
	this.toString = function()
	{
		return this.start.hours + ":" + this.start.minutes + "-" + this.end.hours + ":" + this.end.minutes;
	}
}