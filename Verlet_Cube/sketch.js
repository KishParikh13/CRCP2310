// Ira Greenberg
// Nature & Code
// Center of Creative Computation | SMU
// Fall, 2021

// Description:
// Creating a Verlet organism
// based on a Verlet Cube

let bounds; // vector-+++++++++++
let verletBox;

let canvasSize = 600;

function setup() {
    createCanvas(canvasSize, canvasSize, WEBGL);

    //lenght, width, height of bounds
    bounds = createVector(300, 300, 300);

    // pos, sz, springiness, color of box
    verletBox = new VerletBox(createVector(0, 0, 0), 100, 1, color(200, 155, 25));


    // nodeRadius, nodeCol, stickCol
    verletBox.setStyles(0, color(200, 20, 20), color(20, 20, 200));
}

function draw() {
    background(0);

    ambientLight(255);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, mouseX, mouseY, 250);

    // rotateX(frameCount*PI/720);
    // rotateY(frameCount*PI/720);
    drawBounds();
    
   // specularMaterial(250);
    verletBox.verlet();
    verletBox.draw();
    verletBox.boundsCollide(bounds);

}

// NOTE: Needs to be a cube 
function drawBounds() {
    noFill();
    stroke(155, 75, 55, 5);
    box(bounds.x, bounds.y, bounds.z)
}

function mouseClicked ()  {

    console.log(mouseX - canvasSize/2, mouseY - canvasSize/2);

    // index, nudge amount
    verletBox.nudge(1, createVector(-(mouseX - canvasSize/2)/10, -(mouseY - canvasSize/2)/10, 0));
}