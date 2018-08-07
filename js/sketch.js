var population;
var lifespan = 200;
var frames = 0;
var healthBar;
var target;

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
    ellipse(target.x, target.y, 25, 25);
}