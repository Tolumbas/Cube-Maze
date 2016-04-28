"use strict";

var position = 0;
var faces = [];

window.onload = function() {
	var first = new Face(undefined,function (cnv,cnt) {
		var width = cnv.width;
		var height = cnv.height;
		cnt.fillStyle="rgb(248,237,240)";
		cnt.fillRect(0,0,width,height);
	});
	faces.push(first);
	first.load();
	draw();
}

window.addEventListener("keydown",function (args) {
	move(args);
})

function Face(next,fn){
	this.next = {};
	if (next == undefined){
		this.next.up = this;
	}

	this.load = function () {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 200;
		this.canvas.heght = 200;
		this.canvas.id = " basicFace";
		this.context = this.canvas.getContext('2d');
		this.draw(this.canvas,this.context);

		this.clear = function () {
			this.context
		}
	}
	this.next = next;
	this.draw = fn;
}

function drawTest(cont) {
	context.strokeStyle = "#FF0000";
	context.beginPath();
	context.moveTo(10,10);
	context.lineTo(100,100);
	context.stroke();
}
function draw() {

}
