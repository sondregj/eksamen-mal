// Sondre Gjellestad | 2017

function setup() {
  startLoad(1);

  // Canvas


  // Objects
  anim = new Anim();
}

function Anim() {
  this.update = function() {

  }

  this.render = function() {

  }
}

function draw() {
  if (ready) {
    anim.update();
    anim.render();
  } else {

  }
}
