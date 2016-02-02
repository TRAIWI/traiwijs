"use strict";

var TraiwiJS = TraiwiJS || {};

TraiwiJS.Datepicker = function(id) {
	this.options = {
		prevText: '&#x3c;', prevStatus: '',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: '&#x3e;', nextStatus: '',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'heute', currentStatus: '',
		todayText: 'heute', todayStatus: '',
		clearText: '-', clearStatus: '',
		closeText: 'schließen', closeStatus: '',
		monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		showMonthAfterYear: false,
		showOn: 'focus',
		dateFormat:'dd.mm.yy',
		firstDay: 1
	};
	
	this.datepicker = $("#" + id).datepicker(this.options);
};

TraiwiJS.Datepicker.prototype.get = function() {
	return this.datepicker;
};

TraiwiJS.Datepicker.prototype.parseDate = function(date, format) {
	format = format || "yyyy-mm-dd";
	var parts = date.match(/(\d+)/g); 
	var i = 0;
	var fmt = {};
	
	format.replace(/(yyyy|dd|mm)/g, function(part) { 
		fmt[part] = i++; 
	});

	return new Date(parts[fmt["yyyy"]], parts[fmt["mm"]]-1, parts[fmt["dd"]]);
};