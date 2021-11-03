// Kish Parikh
// CRCP 2310 - Nature & Code
// Midterm Verlet Project

// Wave Animation

let wave;
let numClicks = 0;

function preload() {
}

function setup() {
    createCanvas(windowWidth, 600);
    wave = new Wave(0);

}

function draw() {
    clear();
    translate(width / 2, height / 2);
    wave.draw();
}


function mouseClicked() {
    console.log(++numClicks);
    
    if (numClicks % 2 === 0) {
        wave.state = 0;
    } else {
        wave.state = 1;
    }
}