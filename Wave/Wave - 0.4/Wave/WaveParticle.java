
import processing.core.*;

class WaveParticle {

  PApplet pApp;

  float waveSize = 2;
  int timeOffset;
  PVector pos, speed;
  boolean active, rising;
  int timePassed = 0;

  WaveParticle() {}

  WaveParticle(PApplet pApp, int baseline, int timeOffset) {
    this.pApp = pApp;
    this.pos = new PVector(-50, baseline + 6);
    this.speed = new PVector(1.8f, 0);
    this.active =  true;
    this.rising =  false;
    this.timeOffset = timeOffset;
  }

  void fall() {

    // move wave forwards slowly and shrink
    pos.x += speed.x / 1.2;
    waveSize -= 0.015;
  }

  void rise() {

    // move wave forward and grow in size
    pos.x += speed.x;
    waveSize += 0.01;
  }

  void move () {

    if (active) {
      if (pos.x < pApp.width/2) {
        rise();
        rising = true;
      } else if (waveSize <= 0) {
        this.active =  false;
      } else {
        fall();
        rising = false;
      }
    }
  }

  void go () {

    pApp.noStroke();

    // for the rising and falling states of the wave
    if (rising) {
      pApp.fill(44, 140, 191);
      pApp.triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize));
      pApp.fill(255);
      pApp.triangle(pos.x+(26*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize)-4);
    } else if (!rising) {
      pApp.fill(44, 140, 191);
      pApp.triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize));
      pApp.fill(255);
      pApp.triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(12*waveSize), pos.y+(waveSize)+4);
    }

    move();
  }
}

