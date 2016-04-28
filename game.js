"use strict";

var position = 0;
var faces = [];

var rotationMap = {"up":"bottom","down":"top","left":"right","right":"left"};


window.addEventListener("keydown",function (args) {
	if(args.keyCode == 38 || args.keyCode == 87)move("up");
	if(args.keyCode == 39 || args.keyCode == 68)move("right");
	if(args.keyCode == 40 || args.keyCode == 83)move("down");
	if(args.keyCode == 37 || args.keyCode == 65)move("left");
})

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

function Face(next,fn){
	this.next = {};
	if (next == undefined){
		this.next.up = this;
	}

	this.load = function () {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 200;
		this.canvas.heght = 200;
		//this.canvas.className = "basicFace";
		this.context = this.canvas.getContext('2d');
		this.draw(this.canvas,this.context);

		this.clear = function () {
			this.context
		}
	}
	this.next = next;
	this.draw = fn;
}

function move(dir) {
	if(faces[position][dir] != undefined){
		faces[position].canvas.className=rotationMap[dir];
		faces[position].next[dir].canvas.className="front";
	}
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
