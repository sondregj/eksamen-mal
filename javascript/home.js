// Sondre Gjellestad | 2017

function setup() {
  startLoad(0);

  // Creating canvas
  canvas = createCanvas(600, 200, P2D);
  canvas.parent('canvas-home');

  // Set pen
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(50);

  // Set noise, used for color
  noiseOffset = 0.0;
  noiseSeed(99);

  // Create particle objects
  particles = [];
  for (var i = 0; i < 30; i++) {
    particles[i] = new Particle();
  }

  // Set background for first frame
  background(0);
}

function Particle(x, y) {
  this.pos = createVector(random(0, width), random(0, height));
  this.vel = createVector(random(-1, 1), random(-1, 1));

  this.edgeOffset = 25;

  if (x !== undefined && y !== undefined) {
    this.pos.x = x;
    this.pos.y = y;
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.edges = function() {
    if (this.pos.x < -this.edgeOffset) {
      this.pos.x = width + this.edgeOffset;
    }
    if (this.pos.x > width + this.edgeOffset) {
      this.pos.x = -this.edgeOffset;
    }
    if (this.pos.y < -this.edgeOffset) {
      this.pos.y = height;
    }
    if (this.pos.y > height + this.edgeOffset) {
      this.pos.y = -this.edgeOffset;
    }
  }

  this.render = function() {
    for (var i = 0; i < particles.length; i++) {
      if (dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y) < 80) {
        strokeWeight(1);
        line(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
      }
    }
    strokeWeight(5);
    point(this.pos.x, this.pos.y);
  }
}

function draw() {
  if (ready) {
    background(0, 50);

    // Get noise
    var n1 = noise(noiseOffset, 0);
    var n2 = noise(noiseOffset, 10);
    var n3 = noise(noiseOffset, 20);
    noiseOffset += 0.03;

    // Set color according to noise
    n1 = map(n1, 0, 1, 0, 255);
    n2 = map(n2, 0, 1, 0, 255);
    n3 = map(n3, 0, 1, 0, 255);
    var c = color(n1, n2, n3);
    stroke(c);

    // Update and render particles
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].edges();
      particles[i].render();
    }

    // Draw text
    //noStroke();
    //text("\"ART\"", width / 2, height / 2);
  }
}

function mouseClicked() {
  if (particles.length <= 50) {
    particles.push(new Particle(mouseX, mouseY));
  }
}
