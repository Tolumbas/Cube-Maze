"use strict";

var front;
var rotationMap = {"up":"bottom","down":"top","left":"right","right":"left"};
var gameContainer = document.getElementById('game');

window.addEventListener("keydown",function (args) {
	if(args.keyCode == 38 || args.keyCode == 87){if(front.next.up)appendToFront(front.next.up,"bottom");return;}
	if(args.keyCode == 39 || args.keyCode == 68){if(front.next.left)appendToFront(front.next.left,"right");return;}
	if(args.keyCode == 40 || args.keyCode == 83){if(front.next.down)appendToFront(front.next.down,"top");return;}
	if(args.keyCode == 37 || args.keyCode == 65){if(front.next.left)appendToFront(front.next.left,"left");return;}
})

window.onload = function() {
	var first = function (cnv,cnt) {
		var width = cnv.width;
		var height = cnv.height;
		cnt.fillStyle="rgb(248,237,240)";
		cnt.fillRect(0,0,width,height);
	};
	first.next = {};
	first.next.up = first;
	appendToFront(first);
}

function removeFromContainer(face) {
		gameContainer.removeChild(face);
}
function appendToFront(face,dir) {
	if (face == undefined)return;
	if (front == undefined){
		for (var a in front.next){
			var cnv = document.createElement("canvas");
			var ctx = cnv.getContext("2d");
			face(cnv,ctx);
			cnv.className = "front";
		}

		var cnv = document.createElement("canvas");
		var ctx = cnv.getContext("2d");
		face(cnv,ctx);
		cnv.className = "front";
		front = cnv;
		front.next = face.next;
		gameContainer.appendChild(cnv);
		return;
	}
	front.className=dir;
	setTimeout(removeFromContainer,500,front);
	front.next.className = "front";
	front = front.next;
}















//
