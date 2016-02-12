"use strict";

var TraiwiJS = TraiwiJS || {};

TraiwiJS.PdfResponser = function(trigger, method, options) {
	$("#" + trigger).click(function(event) {
		TraiwiJS.prototype.pauseEvent(event);
		
		if($("#ajax-loading").length == 1) {
			$("#ajax-loading").dialog("open");
		}
		
		var parameter = options || {};

		$.post(TraiwiJS.prototype.getUrl() + "/" + method + ".do", parameter, function(data) {
			if($("#ajax-loading").length == 1) {
				$("#ajax-loading").dialog("close");
			}
			
			if(data == "false") {
				alert("Die PDF konnte nicht erstellt werden.");
			} else {
				if($.browser.device == true) {
					window.open(data, "_self");
				} else {
					var win_popup = window.open(data, "_blank");
					if(!win_popup) {
						alert("Pop-Ups werden durch Ihre Browser-Einstellungen blockiert.");
					}
				}
			}
		});
	});
};