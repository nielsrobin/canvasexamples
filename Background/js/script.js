$("body").prepend("<canvas id='background'></canvas>");
var $canvas = $("#background");

var w;
var h;
var ctx;
var shapes = [];

function resize(){
 	w = $(window).width();
	h = $(window).height()-10;
	ctx = $canvas.attr("width",w).attr("height",h)[0].getContext("2d");
}
resize();
$(window).resize(function() { resize() });

function loop()
{
	ctx.clearRect(0,0,w,h);

	var size = Math.floor(Math.random()*40+20);
	var dir = {
		x: Math.random()*5-2,
		y: Math.random()*5-2,
	}

	shapes.push({ pos: { x: w/2-size, y: h/2-size }, dir: dir, s: size });
	
	for (var i=shapes.length-1; i >= 0; i--) {
		shapes[i].pos.x += shapes[i].dir.x;
		shapes[i].pos.y += shapes[i].dir.y;
		shapes[i].s *= 0.99;

		if(shapes[i].pos.x < 0 || shapes[i].pos.x > w || shapes[i].pos.y < 0 || shapes[i].pos.y > h)
		{
			shapes.splice(i,1);
		}
		else
		{
			ctx.fillStyle = "rgb(" + (200-Math.floor(shapes[i].s)*5) + ",29,28)";
			ctx.fillRect(shapes[i].pos.x,shapes[i].pos.y,shapes[i].s,shapes[i].s);
		}
	};


	setTimeout(loop,20);
}
setTimeout(loop,500);