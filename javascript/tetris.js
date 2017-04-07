// Sondre Gjellestad | 2017

function setup() {
  startLoad(4);

  canvas = createCanvas(300, 600, P2D);
  canvas.parent('canvas');

  ui = new UI();
  grid = new Grid(10, 20);
  player = new Player();

  grid.init();

  noStroke();
  fill(131, 0, 0);
}

function UI() {
  this.update = function() {

  }

  this.render = function() {

  }
}

function Grid(c, r) {
  this.matrix = [];
  this.cols = c;
  this.rows = r;

  this.pxOffset = 2;


  this.init = function() {
    for (var x = 0; x < this.cols; x++) {
      this.matrix[x] = [];
      for (var y = 0; y < this.rows; y++) {
        this.matrix[x][y] = 0;
      }
    }
  }

  this.line;


  this.update = function() {

  }

  this.render = function() {
    for (var x = 0; x < this.matrix.length; x++) {
      for (var y = 0; y < this.matrix[x].length; y++) {
        if (this.matrix[x][y] == 0) {
          fill(50);
        } else if (this.matrix[x][y] == 1) {
          fill(255);
        }
        rect(x * width / this.cols + this.pxOffset, y * height / this.rows + this.pxOffset, width / this.cols - this.pxOffset * 2, height / this.rows - this.pxOffset * 2);
      }
    }
  }
}

function Player() {
  this.pos = createVector(5, 0);

  this.score = 0;
  this.types = {
    o: [
      [],
      [],
      []
    ]
  }
  this.dropStartTime = 0;

  this.put = function() {

  }

  this.bounds = function() {

  }

  this.collisions = function() {

  }

  this.drop = function() {
    // Drop player
    this.dropStartTime = millis();
  }

  this.move = function() {

  }

  this.update = function() {

    // Time drop;
    var t = millis();
    if (t - this.dropStartTime > 1000) {
      this.drop();
    }
  }

  this.render = function() {
    fill(255);
    rect(this.pos.x * width / grid.cols + grid.pxOffset, this.pos.y * height / grid.rows + grid.pxOffset, width / grid.cols - grid.pxOffset * 2, height / grid.rows - grid.pxOffset * 2);
  }
}

function draw() {
  if (ready) {
    background(0);

    grid.update();
    player.update();

    grid.render();
    player.render();

    ui.update();
    ui.render();
  }
}


function keyPressed() {
  console.log(keyCode);
  if (keyCode == 37) {
    player.pos.x--;
  } else if (keyCode == 38) {
    player.pos.y--;
  } else if (keyCode == 39) {
    player.pos.x++;
  } else if (keyCode == 40) {
    player.pos.y++;
  }
}
