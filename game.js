var game = {};
var canvas = document.getElementById('canvasid');
var context = canvas.getContext('2d');

var objects =[];
var draw3D={};
draw3D.draw=function () {

}

game.init = function () {
  canvas.width = 800;
  canvas.height = 800;

  var cube = {};
  cube.size = 70;
  cube.vtx = []
  cube.lines =[];
  for (var a = 0; a < 1; a++) {
    for (var b = 0; b < 1; b++) {
      for (var c = 0; c < 1; c++) {
        cube.vtx.push(-50+a*100,-50+b*100,-50+c*100);
      }
      cube.lines.push([cube.vtx[length-1],cube.vtx[length-2]])
    }
  }
}
game.draw = function () {
  context.clearRect(0,0,canvas.width,canvas.height);
  for (int a=0;a<objects.length;a++){
    objects.draw();
  }
  context.beginPath();
  requestAnimationFrame(game.draw);
}
