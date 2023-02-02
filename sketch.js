
let gota = [];
const nGotas = 200;//Cantidad de gotas
let newElem;

let diam = 10; //Tamaño del circulo

let letras = '1234567890ABCDEFGHIHKLMNOPQRSTUVWXZY';

function setup() {
  createCanvas(1080 , 720);
  textAlign(CENTER, CENTER);
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

class drop{
  constructor (_x , _y){//Crea los parametros para las gotas

    this.x = random(_x);//posicion en x
    this.y = random(-50, -250);//posicion en y

    this.restPos();

    //this.len = random (10,20);//longitud de la gota (solo para las lineas)

  }
  
  update(){ //Actualiza la posicion de la gota
    this.y += this.ySpeed;
    
    if (this.y > width) {//Asigna otros valores al llegar al final de la pantalla
      this.restPos();
    }

  }

  restPos(){//Ubicacion de los elementos
    this.ySpeed = int(random(10)) * diam; //velocidad de la gota
		this.longitud = int(random(2, 30));
		this.y = random(-50, -250);
  }

  display(){//Muestra la gota

    //----Lineas----
    /*
    stroke (120,250,80);
    strokeWeight(4);
    line (this.x, this.y, this.x, this.y+this.len);
    */

  

    
    let col = color(120,250,80);
    
    for (let i = 0; i < this.longitud ; i++) {      
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
      //----Circulos----
      //circle (this.x, this.y - ( diam * i), diam);      
    }
    
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