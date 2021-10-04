class Wave {

  constructor(offset) {
    this.offset = offset;
    this.xspacing = 1; // Distance between each horizontal location
    this.theta = 1.0; // Start angle at 0
    this.angVelocity = 0.005;
    this.amplitude = 100.0; // Height of wave
    this.period = 500.0; // How many pixels before the wave repeats
    this.w = width + 16;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(floor(this.w / this.xspacing));
  }

  draw() {

    

    wave.calcWave();
    noStroke();
    fill('#00D5CA');

    for (let x =  0; x < this.yvalues.length; x++) {
      ellipse((x * this.xspacing) - width/2, this.yvalues[x], this.xspacing, this.xspacing);
    }
  }

  calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    this.theta += this.angVelocity;

    // For every x value, calculate a y value with sine function
    let x = this.theta;
    let gradientAmount = -2;
    // y = a(x-h)2 + k

    for (let i = 0; i < this.yvalues.length; i++) {
        let dip = abs(this.yvalues.length/2 - i)/4;
        let yGradient =  abs(this.yvalues.length/2 - i/100)/400;

        this.yvalues[i] = sin(x) * noise(i) * (this.amplitude) / yGradient - dip + 50;

        x += this.dx;

    }
  }
}