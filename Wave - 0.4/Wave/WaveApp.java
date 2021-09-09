// Kish Parikh
// Nature & Code
// Center of Creative Computation | SMU
// September 3, 2021

// Description: a set of particles moving in a wave like fashion

// Step 1 - a single particle moving in a wavey motion
// Step 2 - More sophisticated wavef
// Step 3 - Add interaction and turn to partial java mode
// Step 4 - Full java mode

import processing.core.*;
import java.util.*;

public class WaveApp extends PApplet {
  ArrayList<WaveParticle> waves = new ArrayList<WaveParticle>();
  int baseline = 400;
  int charge = 200;
  PApplet pApp;
  
  public void settings() {
      size(1000, 500);
  }

  public void setup () {
  }

  public void draw () {

    // sky blue backgound
    background(255);

    // ocean and beach
    noStroke();
//    fill(#2C8CBF);
    rect(0, baseline, width, height/2);
//    fill(#FCCD8F);
    rect(width-20, baseline, 200, height);

    // and sun
//    fill(#FFD53B);
    circle(60, 60, 50);
//    fill(#FFD53B, 70);
    circle(60, 60, 70);
    
    // charge
    fill(0);
    text(charge, width-60, 60);
    
    // animate waves
    for (int i = 0; i < waves.size(); i++) {
      
      waves.get(i).go();
      
      //delete expired waves
      if (!waves.get(i).active) {
        waves.remove(i);
      }
      
    }
    
    //charge up
    if (charge < 1001) {
      charge += 1;
    }
  }

  public void mousePressed() {
    
    //charge is like points/energy to buy a wave with
    if (charge > 200) {
      
      //create new wave object
      waves.add(new WaveParticle(this, baseline, 0));
      println("launching wave");
      
      // deduction for buying wave
      if (charge < 250) {
        charge -= 200;
      } else {
        charge -= 100;
      }
    }
  }

  static public void main(String[] passedArgs) {
      String[] appletArgs = new String[] { "WaveApp" };
      if (passedArgs != null) {
          PApplet.main(concat(appletArgs, passedArgs));
      } else {
          PApplet.main(appletArgs);
      }
  }
}
