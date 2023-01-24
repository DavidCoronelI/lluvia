
let gota = [];
const nGotas = 200;//Cantidad de gotas
let newElem;

function setup() {
  createCanvas(1080 , 720);
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

    this.ySpeed = random(1,3);//velocidad de la gota

    //this.len = random (10,20);//longitud de la gota (solo para las lineas)

  }
  
  update(){ //Actualiza la posicion de la gota
    this.y = this.y + this.ySpeed;
    if (this.y > width) {//Asigna otros valores al llegar al final de la pantalla
      this.y = random(-50 , -200); //Rango de aparicion de las gotas
      this.ySpeed = random(1,3); //Velocidad de caida
    }
  }

  display(){//Muestra la gota

    //----Lineas----
    /*
    stroke (120,250,80);
    strokeWeight(4);
    line (this.x, this.y, this.x, this.y+this.len);
    */

    //----Circulos----

    let siz = 8; //Tamaño del circulo
    let col = color(120,250,80);
    
    for (let i = 0; i < int (random(4 , 6)) ; i++) {      
      col.setAlpha(255 - (i * 40));
      fill(col);
      noStroke();
      circle (this.x, this.y - ( siz * i), 8);      
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


