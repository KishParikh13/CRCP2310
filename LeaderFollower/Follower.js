class Follower {

    constructor(leader, pos, speedFactor) {
        this.leader = leader;
        this.pos = pos;
        this.speedFactor = speedFactor;
    }

    draw() {

        let deltaX = (mouseX - this.pos.x) / (this.speedFactor * 20);
        let deltaY = (mouseY - this.pos.y) / (this.speedFactor * 20);

        if (abs(mouseX - this.pos.x) > 100) {
            this.pos.x += deltaX;
        }

        if (abs(mouseY - this.pos.y) > 40) {
            this.pos.y += deltaY;
        }

        stroke(255);
        fill(255);
        circle(this.pos.x - width / 2, this.pos.y - height / 2, 20);
    }
}