"use strict";

var TraiwiJS = TraiwiJS || {};

TraiwiJS.Dialoger = function(buttonClass) {
	var that = this;
	
	that.buttonClass = buttonClass || "btn icomoon-close float-left";
	that.dialogs = [];
	that.default_buttons = {
		text: " ",
		"class": that.buttonClass,
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
		height: "auto",
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
