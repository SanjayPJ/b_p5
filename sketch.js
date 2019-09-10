let bubbles = [];

function setup() {
  createCanvas(500, 600);
  for(let i = 0; i < 50; i++){
  	bubbles.push(new Bubble(random(width), random(height), random(10, 40)))
  }
}

function draw() {
  background(255, 204, 0);

  bubbles.forEach((bubble) => {
  	bubble.move();
  	bubble.show();
  });
}

function mousePressed() {
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].clicked(mouseX, mouseY, i);
	}
}

class Bubble{
	constructor(_x, _y, _rad){
		this.x = _x;
		this.y = _y;
		this.rad = _rad;
		this.bright = 100;
	}

	clicked = (_mouseX, _mouseY, _pos) => {
		let _dist = dist(_mouseX, _mouseY, this.x, this.y);
		if(_dist < this.rad){
			bubbles.splice(_pos, 1);
		}
	}

	show = () => {
		stroke(51);
		strokeWeight(4);
		fill(25, this.bright);
		ellipse(this.x, this.y, this.rad * 2);
	}

	move = () => {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}
}