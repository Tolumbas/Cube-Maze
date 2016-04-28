"use strict";

var front;

var rotationMap = {"up":"bottom","down":"top","left":"right","right":"left"};
var gameContainer = document.getElementById('game');

window.addEventListener("keydown",function (args) {
	if(args.keyCode == 38 || args.keyCode == 87){move("up");return;}
	if(args.keyCode == 39 || args.keyCode == 68){move("right");return;}
	if(args.keyCode == 40 || args.keyCode == 83){move("down");return;}
	if(args.keyCode == 37 || args.keyCode == 65){move("left");return;}
})

window.onload = function() {
	front = new Face(function (cnv,cnt) {
		var width = cnv.width;
		var height = cnv.height;
		cnt.fillStyle="rgb(248,237,240)";
		cnt.fillRect(0,0,width,height);
	});
	front.next = {};
	front.next.up = front;
	front.load();
	front.canvas.className="front";
	appendToContainer(front);
}

function Face(fn){

	this.draw = fn;
	var f = this;
	this.load = function () {
		f.canvas = document.createElement('canvas');
		f.canvas.width = 200;
		f.canvas.heght = 200;
		f.context = f.canvas.getContext('2d');
		f.draw(f.canvas,f.context);
		f.clear = function () {
			f.context.clearRect(0,0,f.canvas.width,f.canvas.height);
		}
	}

}

function move(dir) {
	if(front.next[dir] != undefined){
		front.canvas.className=rotationMap[dir];
		front.next[dir].canvas.className="front";
		removeFromContainer(front);
		front = front.next[dir];
		appendToContainer(front);
	}

}
function removeFromContainer(face) {
	try{
		gameContainer.removeChild(face.canvas);
	}
	catch(e){console.log("removeFromContainer:",e);}
}
function appendToContainer(face) {
	gameContainer.appendChild(face.canvas);
}
function render() {
	// appendToContainer(front);
	// if(front.next.up != undefined)appendToContainer(front.next.up);
	// if(front.next.down != undefined)appendToContainer(front.next.down);
	// if(front.next.left != undefined)appendToContainer(front.next.left);
	// if(front.next.right != undefined)appendToContainer(front.next.right);

}















//
