// Kish Parikh
// Nature & Code
// Center of Creative Computation | SMU
// August 28, 2021

// Description: a set of particles moving in a wave like fashion

// Step 1 - a single particle moving in a wavey motion
// Step 2 - More sophisticated wave

WaveParticle wp1, wp2;
int baseline = 400;

void setup () {
  size(500, 500);

  // create wave object
  wp1 = new WaveParticle (new PVector(-50, baseline + 6), new PVector(1.8, 0), 0);
  wp2 = new WaveParticle (new PVector(-50, baseline + 6), new PVector(1.8, 0), 2);
}

void draw () {

  // sky blue backgound
  background(#EAF8FF);

  // ocean and beach
  noStroke();
  fill(#2C8CBF);
  rect(0, baseline, 500, 250);
  fill(#FCCD8F);
  pushMatrix();
  rotate(-0.14);
  rect(380, baseline+55, 200, 250);
  popMatrix();

  // and sun
  fill(#FFD53B);
  circle(60, 60, 50);
  fill(#FFD53B, 70);
  circle(60, 60, 70);

  //wave actions
  wp1.create();
  wp2.create();
  wp1.move();
  wp2.move();
}
