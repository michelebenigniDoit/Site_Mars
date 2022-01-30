let circles = [];

let counter = 0;

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(40, 80);
  }
}
function setup() {
  let cnv = createCanvas(windowWidth - 15, windowHeight);
  cnv.position(0, 0, "absolute");
  cnv.style("z-index", -10);

  //cnv.id("defaultCanvas0");
  while (circles.length < 10) {
    let overlapping = false;
    let proposalCircle = new Circle();
    for (let j = 0; j < circles.length; j++) {
      let existingCircle = circles[j];
      let d = dist(
        //distanza tra 2 cerchi
        proposalCircle.x,
        proposalCircle.y,
        existingCircle.x,
        existingCircle.y
      );
      if (d < proposalCircle.r + existingCircle.r) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push(proposalCircle);
      noStroke();
      let h = random(80, 110); //colore "R" di RGB
      let t = random(0); //colore "G" di RGB
      let z = random(0); //colore "B" di RGB
      console.log(h);
      for (let u = proposalCircle.r*2 ; u > 0; --u) {
        //for per sfumare il cerchio dall'estrno all'interno
        fill(h, 0, 0, 9); //colore cerchio
        ellipse(proposalCircle.x, proposalCircle.y, u); //posizione e dimenzione cerchio
      }
    }

    counter++;
    if (counter > 100000) {
      break;
    }
  }
}

/* function setup() {
  createCanvas(710, 400); //dimenzioni sfondo
  noStroke(); //togliere bordi default figure

  let radius = 100; //raggio
  let h = 100; //colore "R" di RGB
  for (let r = radius; r > 0; --r) {
    //for per sfumare il cerchio dall'estrno all'interno
    fill(h, 90, 90); //colore cerchio
    ellipse(200, 200, r); //posizione e dimenzione cerchio
    h = h + 1; //cambio colore per turno successivo
  }
} */
