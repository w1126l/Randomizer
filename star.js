
class Star {

  constructor() {

      this.x = random(width);
	  this.y = random(height);
	  this.size = random(0.25, 5);
	  this.t = random(TAU);

  }

  draw() {

    this.t += 0.1;
	var scale = this.size + sin(this.t) * 2;
	noStroke();
	ellipse(this.x, this.y, scale, scale);

  }

}
