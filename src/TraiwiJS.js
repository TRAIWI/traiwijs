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

TraiwiJS.prototype.getUrl = function() {
	var url = location.protocol + '//' + location.host + location.pathname;
	var is_method = url.substring(url.lastIndexOf('/') + 1);
	if(is_method.substr(-3,3) == ".do") {
		url = url.substr(0, url.length-is_method.length);
	}
	
	return url;
};