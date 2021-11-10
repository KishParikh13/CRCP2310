class VerletToroid {

	constructor (pos, color, outerRadius, innerRadius, numSlices, numConnects) {

		//vector
		this.pos = pos; // Vector()

		//color
		this.color = color;

		//numbers
		this.outerRadius = outerRadius;
		this.innerRadius = innerRadius;
		this.numSlices = numSlices; 
		this.numConnects = numConnects;

		//arrays of verlet objects
		this.nodes = [];
		this.sticks = [];

		//calculate nodes
		for (let i = 0; i < this.numConnects; i++) {
			// create tube profile (based on numConnects)
			

			/* z rotation to calculate connects
			x' = x * cos q - y * sin q
			y' = x * sin q + y * cos q
			z' = z
			*/

			let x = pos.x + Math.cos(theta) * r2;
			let y = pos.y + Math.sin(theta) * r2;
			let connectNodes = [];

			theta += Math.PI * 2 / this.numConnects;

			for (let j = 0; j < this.numSlices; j++) {
				// create copies of tube profiles (basec on numSlices)
				this.nodes[j] = connectNodes;

				/* y rotation to sweep connects, create slices
				z' = z * cos q - x * sin q
				x' = z *sin q + x *cos q
				y' = y
				*/
			}
		}
	}


	draw () {}

	verlet () {}


    boundsCollide(bounds) {
    }

}