"use strict";

var front;
var animation = false;
var loaded = {};
var rotationMap = {"up":"top","down":"bottom","left":"left","right":"right"};
var DomMap = {"top":"bottom","bottom":"top","left":"right","right":"left"};
var oppositeRotationMap = {"up":"bottom","down":"top","left":"right","right":"left"};
var gameContainer = document.getElementById('game');

var light = new Photon.Light(0,0,500);


window.addEventListener("keydown",function (args) {
	if (animation)return;
	animation = true;
	setTimeout(function (){animation=false},300);
	if(args.keyCode == 38 || args.keyCode == 87){appendToFront("up")}
	if(args.keyCode == 39 || args.keyCode == 68){appendToFront("right")}
	if(args.keyCode == 40 || args.keyCode == 83){appendToFront("down")}
	if(args.keyCode == 37 || args.keyCode == 65){appendToFront("left")}
})

window.onload = function() {
	var first = function (cnv,cnt) {
		cnv.width=400;
		cnv.height=400;
		var width = cnv.width;
		var height = cnv.height;
		cnt.fillStyle="rgb(248,237,240)";
		cnt.fillRect(0,0,width,height);
		cnt.fillStyle="#000000";
		cnt.font="20px Georgia";
		cnt.fillText("ipisumi oiasnd aiosdn aosidn aiso",100,100);

	};
	first.next = {};
	first.next.up = first;
	first.next.left = first;
	first.next.right = first;
	first.next.down = first;
	appendToFront(first);
}
function loadNext(face) {
	for(var pos in face.next){
		var cnv = document.createElement("canvas");
		var ctx = cnv.getContext("2d");
		face.next[pos](cnv,ctx);
		cnv.className = rotationMap[pos];
		cnv.style.visibility="hidden";
		gameContainer.appendChild(cnv);
  	removeFromContainer(loaded[pos]);
		cnv.next = face.next;
		loaded[pos] = cnv;
	}
}
function removeFromContainer(face) {
		if(face==undefined)return;
		gameContainer.removeChild(face);
}

function appendToFront(face) {
	if (face == undefined)return;
	if (front == undefined){
			var cnv = document.createElement("canvas");
			var ctx = cnv.getContext("2d");
			face(cnv,ctx);
			cnv.className = "front";
			cnv.next = face.next;

			front = cnv;
			loadNext(front);

			gameContainer.appendChild(front);
			return;
	}
	front.className=oppositeRotationMap[face];
	setTimeout(removeFromContainer,200,front);
	front = loaded[face];
	front.style.visibility="visible";
	front.className = "front";
	delete loaded[face];
	loadNext(front);
}















//
