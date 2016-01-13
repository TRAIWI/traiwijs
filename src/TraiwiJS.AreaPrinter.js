"use strict";

var TraiwiJS = TraiwiJS || {};

TraiwiJS.AreaPrinter = function() {
	var that = this; 
	
	that.x1 = 0;
	that.y1 = 0; 
	that.x2 = 0;
	that.y2 = 0;
	
	var printArea = document.createElement("div");
	printArea.setAttribute("id", "traiwijs-areaprinter"); 
	printArea.style.position = "absolute";
	printArea.style.display = "none";
	printArea.style.zIndex = 100000;
	printArea.style.border = "1px dotted #000";
	printArea.style.backgroundColor = "rgba(255,255,255,.5)";
	document.body.appendChild(printArea);
	
	that.div = printArea;
	
	that.areaPrinterButton = document.getElementById("traiwijs-areaprinter-button");
	if(that.areaPrinterButton != null) {
		that.areaPrinterButton.addEventListener("click", function(event) {
			that.toggleState(event);
		}, true);
	}
};

TraiwiJS.AreaPrinter.prototype.toggleState = function(event) {
	var that = this;
	
	TraiwiJS.prototype.pauseEvent(event);
	
	if(!that.areaPrinterButton.classList.contains("traiwijs-active")) {
		that.areaPrinterButton.classList.add("traiwijs-active");
		that.activate();
	} else {
		that.areaPrinterButton.classList.remove("traiwijs-active");
		that.deactivate();
	}
};

TraiwiJS.AreaPrinter.prototype.activate = function() {
	document.addEventListener("mousedown", this, false);
	document.addEventListener("mouseup", this, false);
};

TraiwiJS.AreaPrinter.prototype.deactivate = function() {
	document.removeEventListener("mousedown", this, false);
	document.removeEventListener("mouseup", this, false);
};

TraiwiJS.AreaPrinter.prototype.handleEvent = function(event) {
	switch(event.type) {
	    case "mousedown": {
	        this.start(event);
	    } break;
	    case "mousemove": {
	        this.resize(event);
	    } break;
	    case "mouseup": {
	        this.finish(event);
	    } break;
	}
};

TraiwiJS.AreaPrinter.prototype.redraw = function() {
	var that = this;
	
    var x3 = Math.min(that.x1, that.x2);
    var x4 = Math.max(that.x1, that.x2);
    var y3 = Math.min(that.y1, that.y2);
    var y4 = Math.max(that.y1, that.y2);
    that.div.style.left = x3 + "px";
    that.div.style.top = y3 + "px";
    that.div.style.width = x4 - x3 + "px";
    that.div.style.height = y4 - y3 + "px";
};

TraiwiJS.AreaPrinter.prototype.start = function(event) {
	var that = this;
	
	if(event.target.getAttribute("id") == "traiwijs-areaprinter-button") {
		return false;
	}
	
	document.addEventListener("mousemove", that, false);

	that.x1 = event.pageX;
	that.y1 = event.pageY;
	that.x2 = event.pageX;
	that.y2 = event.pageY;
	that.redraw();
	that.div.style.display = "block";
};

TraiwiJS.AreaPrinter.prototype.resize = function(event) {
	var that = this;
	
	TraiwiJS.prototype.pauseEvent(event);
	
	that.x2 = event.pageX;
	that.y2 = event.pageY;
	that.redraw();
};

TraiwiJS.AreaPrinter.prototype.finish = function(event) {
	var that = this;
	
	if(event.target.getAttribute("id") == "traiwijs-areaprinter-button") {
		return false;
	}
	
	document.removeEventListener("mousemove", that, false);

	that.areaPrinterButton.classList.remove("traiwijs-active");
	that.deactivate();
	
	that.div.style.display = "none";
	that.generate();
};

TraiwiJS.AreaPrinter.prototype.generate = function() {
	var that = this;
	
	html2canvas(document.body).then(function(canvas) {
		var newCanvas = document.createElement("canvas");
		var context = newCanvas.getContext("2d");
		newCanvas.setAttribute("width", that.div.style.width); 
		newCanvas.setAttribute("height", that.div.style.height); 
		var image = new Image();

		image.onload = function() {
			var sourceX = parseInt(that.div.style.left);
			var sourceY = parseInt(that.div.style.top);
			var sourceWidth = window.innerWidth;
			var sourceHeight = window.innerHeight;
			var destWidth = window.innerWidth;
			var destHeight = window.innerHeight;
			var destX = 0;
			var destY = 0;
			
			context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
		};
		image.src = canvas.toDataURL();
		
		var popup = window.open();
		popup.document.body.appendChild(newCanvas);
		popup.focus();
		popup.print();
	});
};