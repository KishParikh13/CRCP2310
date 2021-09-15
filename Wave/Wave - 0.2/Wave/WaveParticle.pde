class WaveParticle {


  float waveSize = 2;
  int timeOffset;
  PVector pos, speed;
  boolean rising;
  int timePassed = 0;
  
  WaveParticle() {}
  
  WaveParticle(PVector posIn, PVector speedIn, int timeOffsetIn) {
    this.pos = posIn;
    this.speed = speedIn;
    this.rising =  false;
    this.timeOffset = timeOffsetIn;
  }
  
  void move() {
    
    if (timePassed > timeOffset*60) {
      
      // reset wave if past beach
      if (pos.x > (width - 100)) {
        pos.x = -50;
        waveSize = 2;
        rising = true;
      }
      
      // move wave
      pos.x += speed.x;
      
      // make wavesize grow and shrink
      if (pos.x > width/2) {
        rising = false;
        waveSize -= (pos.x / 9000);
      } else {
        rising = true;
        waveSize += (pos.x / 8000);
      }
    }
} 
  
  void create () {
    
    timePassed++;
    
    if (timePassed > timeOffset*60) {
      
      
      noStroke();
    
    
      if (rising) {
        fill(#2C8CBF);
        triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize));
        fill(#FFFFFF);
        triangle(pos.x+(26*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize)-4);
      } else if (!rising) {
        fill(#2C8CBF);
        triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(30*waveSize), pos.y+(waveSize));
        fill(#FFFFFF);
        triangle(pos.x+(7*waveSize), pos.y+(waveSize), pos.x+(23*waveSize), pos.y-(10*waveSize), pos.x+(12*waveSize), pos.y+(waveSize)+4);
      }
    }
  }
}
 
