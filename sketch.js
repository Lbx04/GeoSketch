let y = 0;
let a = 0;
let t;



function setup() {
	createCanvas(700, 700);
	stroke(0);


	createP('');
	button = createButton("go");
	button.mousePressed();

	alpSlider = createSlider(0, 100, 0);
	fmSlider = createSlider(0, 50, 1);
	lnlngthSlider = createSlider(10, 400, 300);


	t = 0;
}

function draw() {

	const alp = alpSlider.value();
	const fm = fmSlider.value();

	const lnlngth = lnlngthSlider.value();

	frameRate(fm);
	background(255, alp);
	var x = width * noise(t * -10);
	var y = height * noise(t * 60);
	var r = 200 * noise(t);
  	var g = 255 * noise(t);
  	var b = 255 * noise(t+20);
	var len = 10 * noise(t * 200);

	
	fill(0, 255)
	noStroke()
	rectMode(CENTER);
	rect(x, y, random(lnlngth), len * random(0.5));

	rect(x + 50, y + 5, random(1), random(lnlngth));

	rect(x , y, random(2), len * random(30));

	fill(250, 250, 40, 200)
	ellipse(x + 50, y + 50, len * random(10), len * random(10));

	fill(255, 50, 20, 200)
	ellipse(x - 100, y - 10, len * random(10), len * random(10));


	t = t + 0.01;


}
