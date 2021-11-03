class Wave {

  constructor(offset) {
    this.offset = offset;

    // static properties for wave behavior
    this.xspacing = 1; // Distance between each horizontal location
    this.theta = 1.0; // Start angle at 0
    this.angVelocity = 0.003;
    this.amplitude = 300.0; // Height of wave
    this.dipMagnitude = 3;
    this.yAmplitudeGradientMagnitude = 3;
    this.period = 600.0; // How many pixels before the wave repeats
    this.yOffset = 50;

    this.state = 0;

    // dynamic properties for responsive sizing/layout of wave
    this.w = windowWidth + 16;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(floor(this.w / this.xspacing));
    
    // an array of verlet points to be each cell in the wave
    this.verletPoints = [];
    for (let i = 0; i < this.yvalues.length; i++) {
      this.verletPoints[i] = new VerletPoint(new p5.Vector((i * this.xspacing) - this.w/2, this.yvalues[i]), this.xspacing, '#00D5CA');
    }
  }

  draw() {
    
    noStroke();
    fill('#00D5CA');


    // draw wave and its points
    wave.calcWave();
    for (let x = 0; x < this.yvalues.length; x++) {
      this.verletPoints[x].draw();
    }
  }

  calcWave() {

    // dynamic vars at each frame 
    this.theta += this.angVelocity;
    this.x = this.theta;
    this.gradientAmount = -2;
    this.midpoint = this.yvalues.length/2;
    this.angVelocity = mouseX/10000;

    // draw button
    this.drawPauseButton();

    // render waves
    switch (this.state) {
      case 0:
        this.stopWaves();
        break;
      case 1:
        this.drawWaves();
        break;
      case 2:
        break;
      case 3:   
        break;
      default:
    }
  }

  calcVerletPointOffset(i) {

    this.dip = sin(abs(this.midpoint - i)/this.dipMagnitude);
    this.amplitudeGradient =  abs(this.midpoint - i/this.yAmplitudeGradientMagnitude)/this.amplitude*4;
    this.yOffset = sin(this.x) * noise(i) * (this.amplitude) / this.amplitudeGradient - this.dip + (this.yOffset*500)/windowHeight/2;
  }

  //draw wave animation
  drawWaves () {
    for (let i = 0; i < this.verletPoints.length; i++) {
      this.calcVerletPointOffset(i);

      // animate wave points into wave form
      // this.verletPoints[i].pos.y +=  (this.yOffset-this.verletPoints[i].pos.y)/10;
      this.verletPoints[i].nudge(new p5.Vector(0, (this.yOffset-this.verletPoints[i].pos.y)/10));
      this.x += this.dx;
    }
  }

  //reset to straight line
  stopWaves() {
    for (let i = 0; i < this.verletPoints.length; i++) {
      this.calcVerletPointOffset(i);
      
      // animate wave points to straight line
      if (this.verletPoints[i].pos.y < -4) {
        this.verletPoints[i].nudge(new p5.Vector(0, 4));
      } else if (this.verletPoints[i].pos.y > 4) {
        this.verletPoints[i].nudge(new p5.Vector(0, -4));
      } else {
        this.verletPoints[i].pos.y = 0;
      }
    }
  }

  drawPauseButton() {

    // static props for button
    let btnPos = new p5.Vector(0, windowHeight/2 - 100);
    let btnSize = 40;
    let bgColor = "#292929";
    let fgColor = "#FFFFFF";

    // draw bg circle
    fill(bgColor);
    circle(btnPos.x,btnPos.y,btnSize);

    // draw pause or play icon
    fill(fgColor);
    switch (this.state) {
      case 0:
        let triangleWidth = btnSize/3;
        let triangleHeight = btnSize/2.5;
        let triangleXOffset = btnSize/20;
        triangle(btnPos.x-triangleWidth/2+triangleXOffset, btnPos.y-triangleHeight/2, btnPos.x+triangleWidth/2+triangleXOffset, btnPos.y, btnPos.x-triangleWidth/2+triangleXOffset, btnPos.y+triangleHeight/2);
        break;
      case 1:
        rect(btnPos.x-btnSize/8-btnSize/14, btnPos.y-btnSize/5, btnSize/7, btnSize/2.5, 1);
        rect(btnPos.x+btnSize/8-btnSize/14, btnPos.y-btnSize/5, btnSize/7, btnSize/2.5, 1);
        break;
    }
  }
}

