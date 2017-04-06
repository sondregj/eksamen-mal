// Sondre Gjellestad | 2017

function setup() {
  startLoad(2);

  // Canvas
  noCanvas();

  // Globale variabler
  running = 0;

  // Initialiserer UI
  ui = new UI();

  ui.init;
  ui.update;
}

function UI() {
  this.init = function() {

  }

  this.update = function() {

  }
}

function draw() {
  if (running) {
    ui.update();
  }
}
