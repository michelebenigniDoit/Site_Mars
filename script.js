/* const randomColor = () => {
  const randomCol = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementsByClassName("sfumature__1")[0].style.background =
    "radial-gradient(#" + randomCol + ", #0000 50%)";
};

randomColor(); 

const randomColo = () => {
  const randomCol = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementsByClassName("sfumature__1")[0].style.background =
    "radial-gradient(#" + randomCol + ", #0000 50%)";
};

randomColo();  */

/* document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementsByClassName("sfumature__1")[0];
  document.getElementById("sfumature").insertBefore(newDiv, currentDiv);
}  */

window.onload = init();
function init() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.addEventListener("mousemove", MouseMove, false);

  mouse = { x: 0, y: 0 };
  particleHolders = []; //qui vengono raccolte le particelle
  x = 100;
  y = 100;
  angle = 0.2;
  radius = 80;
  particleCount = 50;

  function MouseMove(event) {
    //non interessa
    mouse.x = canvas.offsetLeft;
    mouse.y = canvas.offsetLeft;
  }
  for (i = 0; i < particleCount; i++) {
    particleHolders.push(new generateParticles());
  }
  function generateParticles() {
    this.x = Math.random() * canvas.width; //x posizione paticelle
    this.y = Math.random() * canvas.height; //y posizione particelle
    //this.color = color[Math.floor(Math.random() * color.length)]; //colore particelle
    this.color = this.rad = Math.floor(Math.random() * 5); //dimensione particelle
    //this.rad = rad[Math.floor(Math.random() * rad.length)]; //dimensione particelle
  }

  }
  
  

  function vibrate() {
    context.fillStyle = "#0000"; //bg(background)
    context.fillRect(0, 0, canvas.width, canvas.height); //bg
    for (var j = 0; j < particleHolders.length; j++) {
      var p = particleHolders[j]; //identità delle singole particelle
      context.beginPath();

      //context.fillStyle = p.color;
      g = "#" + Math.floor(Math.random() * 16777215).toString(16);
      pippo = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.rad * 10);
      pippo.addColorStop(0, "#FF5733");
      pippo.addColorStop(1, "#1D1D1D");

      (context.fillStyle = pippo),
        context.arc(p.x, p.y, p.rad * 10, Math.PI * 2, false);
      context.fill();
    }
    for (var n = 0; n < particleHolders.length; n++) {
      var other = particleHolders[n];
      var d = dist(particleHolders.x, particleHolders.y, other.x, other.y);
      if (d < particleHolders.r + other.r) {
        overlapping = true;
        break;
      }
    }
    
    if (!overlapping) {
      particleHolders.push(particleHolders);
    } 

  setInterval(vibrate, 30);
}
