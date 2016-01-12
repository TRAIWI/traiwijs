"use strict";

var TraiwiJS = function() {
	
};

TraiwiJS.prototype.pauseEvent = function(event) {
	if(event.stopPropagation) {
		event.stopPropagation();
	}
	if(event.preventDefault) {
		event.preventDefault();
	}
	event.cancelBubble = true;
	event.returnValue = false;
	
	return false;
};