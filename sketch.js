let linea;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(150);

  let ancho = 88;

  linea = new LineasHoV();

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      if ((i % 2 == 0) & (j % 2 == 0) || (i % 2 != 0) & (j % 2 != 0)) {
        linea.tipo = "H";
      } else {
        linea.tipo = "V";
      }

      linea.x1 = i * ancho;
      linea.y1 = j * ancho;

      linea.dibuja();

    }//finfor (var j = 0; 

  }//fin for (var i = 0; i < 20; i+

  //Recuadro 
  noStroke();
  fill(100);
  rect(0, 0, 10, windowHeight);
  rect(0, 0, windowWidth, 10);
  rect(0, windowHeight - 10, windowWidth, windowHeight);
  rect(windowWidth - 10, 0, windowWidth, windowHeight);

  noLoop();

}//fin function draw() 


function windowResized() {
  resizeCanvas(windowWidth  , windowHeight  );
  draw();
}

//////////////////////////////////////////////////////////////
//Clase LineasHoV => dibuja líneas como rectángulos - rect
class LineasHoV {
  constructor() {
    this.tipo   = 'H';
    this.aBorde = 10;
    this.aBanda = 50;
    this.aSep   = 9;

    this.x1;
    this.x2;
    this.y1;
    this.y2;

    this.longi  = this.aBanda + 2 * (this.aBorde + this.aSep);

    this.color1 = "#fff";
    this.color2 = "#fc2";
    this.color3 = "#2cf";
  }

  //método dibuja
  dibuja() {
    //Borde 1
    if (this.tipo == "H") {
      fill(this.color2);
      rect(
        this.x1 - this.aSep,
        this.y1 + this.aSep,
        this.longi + 2 * this.aSep,
        this.aBorde
      );
    } else {
      fill(this.color3);
      rect(
        this.x1 + this.aSep,
        this.y1 - this.aSep,
        this.aBorde,
        this.longi + 2 * this.aSep
      );
    } //fin de if(this.tipo == 'H')

    //Banda central
    fill(this.color1);
    if (this.tipo == "H") {
      rect(
        this.x1 - this.aSep,
        this.y1 + this.aBorde + this.aSep,
        this.longi + 2 * this.aSep,
        this.aBanda
      );
    } else {
      rect(
        this.x1 + this.aBorde + this.aSep,
        this.y1 - this.aSep,
        this.aBanda,
        this.longi + 2 * this.aSep
      );
    } // fin de if(this.tipo == 'H')

    //Borde 2
    if (this.tipo == "H") {
      fill(this.color2);
      rect(
        this.x1 - this.aSep,
        this.y1 + this.aBanda + this.aBorde + this.aSep,
        this.longi + 2 * this.aSep,
        this.aBorde
      );
    } else {
      fill(this.color3);
      rect(
        this.x1 + this.aBanda + this.aBorde + this.aSep,
        this.y1 - this.aSep,
        this.aBorde,
        this.longi + 2 * this.aSep
      );
    } // fin de if(this.tipo == 'H')

  } //fin dibuja()

} // fin clase LineasHoV
