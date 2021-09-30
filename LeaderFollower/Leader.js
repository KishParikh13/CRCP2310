class Leader {

    constructor(pos) {
        this.size = createVector(70, 20);
        this.pos = pos;
    }

    draw() {

    	this.pos.x = mouseX - width / 2;
    	this.pos.y = mouseY - height / 2;
  
        image(img, this.pos.x - 55, this.pos.y  - 55, 100, 100);
    }
}