let y = 0;
let a = 0;
let t;

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(0);
	frameRate(1);

	t = 0;
}

function draw() {
	background(255, 1);
	var x = width * noise(t * -10);
	var y = height * noise(t * 50);
	var r = 200 * noise(t);
  	var g = 255 * noise(t);
  	var b = 255 * noise(t+20);
	var len = 20 * noise(t * 20);

	
		fill(0, 255)
		noStroke()
		rectMode(CENTER);
		rect(x, y, len * random(30), len * random(0.5));

		rect(x + 5, y + 5, len * random(50), len * random(0.1));

		rect(x, y, len * random(0.1), len * random(50));

		fill(250, 250, 40, 200)
		rect(x + 50, y + 50, len * random(10), len * random(10));

		fill(255, 50, 20, 200)
		rect(x - 100, y - 10, len * random(10), len * random(10));


 		t = t + 0.01;


}
