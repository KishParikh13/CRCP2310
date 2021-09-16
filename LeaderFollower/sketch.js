// Kish Parikh
// PFJS Follower Leader Program

let numDogs = 20;

let bone; //Vector
let dogs = []; // SpringyDude

function setup() {
    createCanvas(1000, 600);

    bone = new Leader(createVector(0,0));

    for (let i = 0; i < numDogs; i++) {
        dogs[i] = new Follower(bone, createVector(0, 0), i*3);
    }

}

function draw() {
    background(78, 181, 109);
    translate(width / 2, height / 2);

	bone.draw();

    for (let i = 0; i < numDogs; i++) {

        for (let j = 0; j < numDogs; j++) {
            if (dogs[i].pos.x - dogs[j].pos.x < 20 && dogs[i].pos.x - dogs[j].pos.x > 0) {
                dogs[i].pos.x += 1;
            }
            if (dogs[i].pos.x - dogs[j].pos.x > -20 && dogs[i].pos.x - dogs[j].pos.x < 0) {
                dogs[i].pos.x -= 1;
            }

            if (dogs[i].pos.y - dogs[j].pos.y < 20 && dogs[i].pos.y - dogs[j].pos.y > 0) {
                dogs[i].pos.y += 1;
            }
            if (dogs[i].pos.y - dogs[j].pos.y > -20 && dogs[i].pos.y - dogs[j].pos.y < 0) {
                dogs[i].pos.y -= 1;
            }
        }

       dogs[i].draw();
    }
}