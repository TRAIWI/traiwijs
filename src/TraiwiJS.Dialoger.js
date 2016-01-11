"use strict";

var TraiwiJS = TraiwiJS || {};

TraiwiJS.Dialoger = function() {
	this.dialogs = [];
	this.default_buttons = {
		text: " ",
		"class": "btn icomoon-close float-left",
		click: function() {
			$(this).dialog("close");
		},
		showText: true
	};
	
};



TraiwiJS.Dialoger.prototype.add = function() {
	var that = this;
	
	var salt = Math.floor(Math.random() * (1000000 - 1)) + 1;
	var div = document.createElement("div");
	div.setAttribute("id", "dialog-" + salt);
	div.setAttribute("class", "dialoger-generated");
	document.body.appendChild(div);
	
	var dialog = $("#dialog-" + salt).dialog({
		autoOpen: false,
		height: 300,
		width: $(window).width() > 300 ? 300 : $(window).width()-20,
		modal: true,
		show: {
			effect: "fade",
			duration: 200
		},
		hide: {
			effect: "fade",
			duration: 100
		},
		buttons: [that.default_buttons],
	})
	
	that.dialogs[salt] = $(dialog);
	
	return $(dialog);
};

TraiwiJS.Dialoger.prototype.get = function(salt) {
	var that = this;
	
	if(that.dialogs[salt] == undefined) {
		return false;
	}
	
	return that.dialogs[salt];
};
