
class VerletPoint {
    constructor(pos, radius, color) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
        this.radiusOld = this.radius;
        this.posOld = new p5.Vector(pos.x, pos.y);
    }

    nudge(offset) {
        this.offset = offset;
        this.pos.add(this.offset);
    }

    // calculate wave motions
    verlet() {
        var posTemp = new p5.Vector(this.pos.x, this.pos.y);

        this.pos.x += (this.pos.x - this.posOld.x);
        this.pos.y += (this.pos.y - this.posOld.y);

        this.posOld.set(posTemp);
    }

    // draw point
    draw() {
        fill(this.color);
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
        pop();
    }
}

