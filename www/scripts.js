"use strict";

var isPhoneGap = false;

function global_init()
{
	document.addEventListener("deviceready", function(){isPhoneGap = true;}, false);
	
	db = new ImprovedDatabase("data", "adatok", 1024 * 1024 * 5);
}