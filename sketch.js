let gota = [];
const nGotas = 500; //Cantidad de gotas
let newElem;
let diam = 8;

let letras = 'abcdefghijklmnopqrstuvwxyz1234567890/ABCDEFGHIHKLMNOPQRSTUVWXZY';

function setup() {
	createCanvas(1080, 720);
	// frameRate(20);
	for (let i = 0; i < nGotas; i++) {
		newElem = new drop(width, height);
		gota.push(newElem);
	}
}

function draw() {
	background(0);
	for (let i = 0; i < gota.length; i++) {
		gota[i].update();
		gota[i].display();
	}
}

class drop {
	constructor(_x, _y) {
		//Crea los parametros para las gotas

		this.x = random(_x); //posicion en x
		this.y = random(-50, -250); //posicion en y

		this.restePos();
	}

	update() {
		//Actualiza la posicion de la gota
		if (frameCount % this.ySpeed == 0) {
			this.y += diam;
		}

		if (this.y > width) {
			//Asigna otros valores al llegar al final de la pantalla
			this.restePos();
		}
	}

	restePos() {
		this.ySpeed = floor(random(10)) * diam; //velocidad de la gota
		this.longitud = round(random(2, 30));
		this.y = random(-50, -250);
	}

	display() {
		//Muestra la gota

		//----Lineas----
		/*
    stroke (120,250,80);
    strokeWeight(4);
    line (this.x, this.y, this.x, this.y+this.len);
    */

		//----Circulos----

		//Tamaño del circulo
		let col = color(120, 250, 80);

		for (let i = 0; i < this.longitud; i++) {
			let alpha = map(i, 0, this.longitud, 255, 10);
			col.setAlpha(alpha);
			fill(col);
			noStroke();
			let letraRandom = floor(random(letras.length));
			text(
				letras.slice(letraRandom, letraRandom + 1),
				this.x,
				this.y - diam * i
			);
			// circle(this.x, thiss.y - diam * i, diam);
		}

		// var n = 0;
		// if (n <= random(4,6)) {
		//   circle (this.x, this.y + (n * 8), 8);
		//   n++;
		// }

		// let col = color(120,250,80);
		// col.setAlpha(120);
		// noStroke();
		// fill (col);
		// circle (this.x, this.y, 8);
		// circle (this.x, this.y+8, 8);
		// circle (this.x, this.y+16, 8);
		// circle (this.x, this.y+24, 8);
	}
}
