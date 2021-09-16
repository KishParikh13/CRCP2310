class Leader {
    constructor(pos) {
        this.size = createVector(70, 20);
        this.pos = pos;
    }

    draw() {

    	this.pos.x = mouseX - width / 2;
    	this.pos.y = mouseY - height / 2;
        fill(255);
        noStroke();
        rect(this.pos.x - (this.size.x/2), this.pos.y - (this.size.y/2), this.size.x, this.size.y);  	
    	circle(this.pos.x - (this.size.x/2), this.pos.y +10 - (this.size.y/2), 40);
    	circle(this.pos.x + (this.size.x/2), this.pos.y +10 - (this.size.y/2), 40);
    }
}