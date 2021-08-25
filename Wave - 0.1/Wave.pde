// Kish Parikh
// Nature & Code
// Center of Creative Computation | SMU
// August 25, 2021

// Description: a set of particles moving in a wave like fashion

// Step 1 - a single particle moving in a wavey motion

WaveParticle wp;

void setup () {
  size(500, 500);
  
  // create wave object
  wp = new WaveParticle (new PVector(-50, height/2 + 34), new PVector(2, 0));
}

void draw () {
  
  // sky blue backgound
  background(#EAF8FF);
  
  // ocean and beach
  rect(0, 280, 500, 250);
  fill(#FCCD8F);
  rect(460, 280, 50, 250);
  
  //wave actions
  wp.move();
  wp.create();
}
