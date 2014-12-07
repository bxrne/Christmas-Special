window.onload = init();

var canvas, ctx;

var colors = ["#00ef00", "#2828ff", "#b200b2", "#e0bd00", "#ff3233"];

canvas.addEventListener('click', clicker, false);
function download() {
    var dt = canvas.toDataURL();
    this.href = dt; //this may not work in the future..
}
document.getElementById('download').addEventListener('click', download, false);
function init() {
  //initializes canvas and context

  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  stump();
  tree();
  star(ctx, 300, 70, 5, 70, 30);


}

function tree() {
  //draws tree

  ctx.fillStyle= "green";

  ctx.beginPath();
  ctx.moveTo(300, 20);
  ctx.lineTo(500, 500);
  ctx.lineTo(100, 500);
  ctx.closePath();

  ctx.fill();
}

function stump() {

  ctx.fillStyle = "#340d0d";
  ctx.strokeStyle = "black";

  ctx.rect(270, 450, 50, 550);
  ctx.fill();
  ctx.stroke();
}

function clicker(e) {
   var x = e.clientX - canvas.offsetLeft;
   var y = e.clientY - canvas.offsetTop;

   bauble(x, y);
}

function bauble(x, y) {
  var rn = Math.floor(Math.random()*5);
  ctx.fillStyle = colors[rn];
  ctx.beginPath();
  ctx.arc(x,y,20,0,2*Math.PI);
  ctx.fill();
}

function star(context, xCenter, yCenter, nPoints, outerRadius, innerRadius) {
  ctx.fillStyle = "yellow";
  ctx.beginPath();
        for (var ixVertex = 0; ixVertex <= 2 * nPoints; ++ixVertex) {
            var angle = ixVertex * Math.PI / nPoints - Math.PI / 2;
            var radius = ixVertex % 2 == 0 ? outerRadius : innerRadius;
            context.lineTo(xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
        }
        ctx.fill();
}