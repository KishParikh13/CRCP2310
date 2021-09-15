class WaveParticle {

  PVector pos, speed;
  float waveSize;
  
  
  WaveParticle() {}
  
  WaveParticle(PVector posIn, PVector speedIn) {
    this.pos = posIn;
    this.speed = speedIn;
    waveSize = 2;
  }
  
  void move() {
    
    // reset wave if past beach
    if (pos.x > (width - 100)) {
      pos.x = -50;
      waveSize = 2;
    }
    
    // move wave
    pos.x += speed.x;
    
    // make wavesize grow and shrink
    if (pos.x > width/2) {
      waveSize -= (pos.x / 9000);
    } else {
      waveSize += (pos.x / 8000);
    }
    
  } 
  
  void create () {
    fill(#2C8CBF);
    noStroke();
    triangle(pos.x+(12*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(34*waveSize), pos.y+(waveSize));
  }
}
