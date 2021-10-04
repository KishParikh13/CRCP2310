// Kish Parikh
// Wave Animation

let wave, wave1;

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
    wave.calcWave();
}