coords = {X:0,Y:0};
colour = {R:0,G:0,B:0};

function main()
{
initCanvas();
draw();		
}

function initCanvas()
{
	var canvas = document.createElement("canvas");
	canvas.id = 'mycanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
}

function clamp(value, min, max)
{
	if(max<min) {
		var temp = min;
		min = max;
		max = temp;
	}
	return Math.max(min, Math.min(value, max));
}

function rgb(r, g, b)
{
	return 'rgb('+clamp(Math.round(R),0,255)+', '+clamp(Math.round(G),0,255)+', '+clamp(Math.round(B),0,255)+')';
}

function randomRgb()
{
	 R = Math.random()*255;
	 G =  Math.random()*255;
	 B =  Math.random()*255;
	return  rgb(R,G,B);
}

function randomXy()
{
	var cordX = (Math.random()*window.innerWidth);
	var cordY = (Math.random()*window.innerHeight);

	if(cordX > (window.innerWidth)-50 )
	{
		cordX-=50;
	}

	if(cordY > (window.innerHeight)-50 )
	{
		cordY-=50;
	}
X= cordX;
Y =cordY;
}

function square()
{
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = randomRgb();
	randomXy();
	ctx.fillRect(X,Y, 50, 50);
}

function draw()
{
	for(var i = 0 ; i <= 200 ; i++)
	{
		square();
	}
}
