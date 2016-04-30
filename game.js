"use strict";

var front;
var rotationMap = {"up":"top","down":"bottom","left":"left","right":"right"};
var oppositeRotationMap = {"top":"bottom","bottom":"top","left":"right","right":"left"};
var gameContainer = document.getElementById('game');

window.addEventListener("keydown",function (args) {
	if(args.keyCode == 38 || args.keyCode == 87){if(front.face.next.up)appendToFront(front.face.next.up,"bottom");return;}
	if(args.keyCode == 39 || args.keyCode == 68){if(front.face.next.right)appendToFront(front.face.next.right,"right");return;}
	if(args.keyCode == 40 || args.keyCode == 83){if(front.face.next.down)appendToFront(front.face.next.down,"top");return;}
	if(args.keyCode == 37 || args.keyCode == 65){if(front.face.next.left)appendToFront(front.face.next.left,"left");return;}
})

window.onload = function() {
	window.first = function (cnv,cnt) {
		var width = cnv.width;
		var height = cnv.height;
		cnt.fillStyle="rgb(248,237,240)";
		cnt.fillText("zdrasti",10,10);
		cnt.fillRect(0,0,width,height);
	};
	first.next = {};
	first.next.up = first;
	first.next.left = first;
	first.next.right = first;
	first.next.down = first;
	appendToFront(first);
}

function removeFromContainer(face) {
		gameContainer.removeChild(face);
}

function appendToFront(face,dir) {
	if (face == undefined)return;
	if (front == undefined){
			var cnv = document.createElement("canvas");
			var ctx = cnv.getContext("2d");
			face(cnv,ctx);
			cnv.className = "front";

			front = cnv;
			front.face = face;

			gameContainer.appendChild(front);
			return;
	}
	front.className=dir;
	setTimeout(removeFromContainer,200,front);

	var cnv = document.createElement("canvas");
	var ctx = cnv.getContext("2d");
	face(cnv,ctx);
	cnv.className = oppositeRotationMap[dir];
	gameContainer.appendChild(cnv);
	setTimeout(function () {
		cnv.className = "front";
	},10);

	front = cnv;
	front.face = face;
}















//
