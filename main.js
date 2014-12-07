window.onload = init();

var canvas, ctx;

var colors = ["#FF0000", "#00bc00", "blue", "purple"];

canvas.addEventListener('click', clicker, false);

function init() {
  //initializes canvas and context

  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  stump();
  tree();
  star(ctx, 300, 60, 5, 70, 30);


}

function tree() {
  //draws tree

  ctx.fillStyle= "green";
  ctx.strokeStyle= "black";

  ctx.beginPath();
  ctx.moveTo(300, 20);
  ctx.lineTo(500, 500);
  ctx.lineTo(100, 500);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();
}

function stump() {

  ctx.fillStyle = "#340d0d";
  ctx.strokeStyle = "black";

  ctx.rect(270, 500, 50, 600);
  ctx.fill();
  ctx.stroke();
}

function clicker(e) {
   var x = e.clientX - canvas.offsetLeft;
   var y = e.clientY - canvas.offsetTop;

   bauble(x, y);
}

function bauble(x, y) {
  var rn = Math.floor(Math.random()*4);
  ctx.fillStyle = colors[rn];
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x,y,20,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
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