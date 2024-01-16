//Boundaries Challenge

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Global Variables
let rectX = 100;
let rectY = 375;
let speedX = 4;
let speedY = 0;
let acc = 0.5;
let jumpSpeed = -13;

let leftPressed = false;
let rightPressed = false;

window.addEventListener("load", draw);

function draw() {
  // LOGIC SECTION
  // Horizontal Movement
  if (rightPressed) {
    rectX += speedX;
  } else if (leftPressed) {
    rectX += -speedX;
  }

  //Vertical Movement
  speedY += acc; //Accelerate
  rectY += speedY; // move

  // Check boundaries for Green Rect
  if (rectX < 1) {
    rectX = 0;
  }

  if (rectX > 374) {
    rectX = 375;
  }

  if (rectY > 374) {
    rectY = 375;
  }

  if (rectY < 275 && rectY > 225 && rectX > 75 && rectX < 300) {
    rectY = 225;
    speedY = 0;
  }

  // DRAW SECTION
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "green";
  ctx.fillRect(rectX, rectY, 25, 25);

  ctx.fillStyle = "grey";
  ctx.fillRect(100, 250, 200, 25);

  requestAnimationFrame(draw);
}

//Square
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = true;
  } else if (event.code == "ArrowLeft") {
    leftPressed = true;
  } else if (event.code == "ArrowUp") {
    speedY = jumpSpeed;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = false;
  } else if (event.code == "ArrowLeft") {
    leftPressed = false;
  }
}
