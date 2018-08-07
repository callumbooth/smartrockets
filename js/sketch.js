var population;
var lifespan = 400;
var frames = 0;
var healthBar;
var target;
var rx = 100;
var ry = 200;
var rw = 200;
var rh = 10;

//TODO:
//add success/dead counter
//improve fitness function to take time in account
//create levels
//

function setup() { 
    createCanvas(400, 400);
    population = new Population();
    healthBar = createP();
    target = createVector(width/2, 50);
  } 
  
function draw() { 
    background(0);
    population.run();

    healthBar.html(frames);
    frames++;

    if (frames === lifespan) {
        population.evaluate();
        population.selection();
        //population = new Population();
        frames = 0;
    }

    fill(255);
    rect(rx, ry, rw, rh);

    ellipse(target.x, target.y, 25, 25);
}