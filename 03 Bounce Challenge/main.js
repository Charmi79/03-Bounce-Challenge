// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 450;

// Global Vairables
let greenY = 300;
greenSpeed = 2;
let blueX = 200;
let blueSpeed = 2;
let orangeX = 250;
let orangeY = 250;
let oSpeedX = 2;
let oSpeedY = 2;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable
  // Blue square
  blueX += blueSpeed;
  if (blueX + 30 > cnv.width) {
    blueX = cnv.width - 30;
    blueSpeed = -2;
  } else if (blueX < 0) {
    blueSpeed = 2;
  }

  // Green square
  greenY += greenSpeed;
  if (greenY + 30 > cnv.height) {
    greenY = cnv.height - 30;
    greenSpeed = -2;
  } else if (greenY < 0) {
    greenSpeed = 2;
  }

  // Orange Square
  orangeX += oSpeedX;
  orangeY += oSpeedY;

  // OrangeX
  if (orangeX + 30 > cnv.width) {
    orangeX = cnv.width - 30;
    oSpeedY = -2;
    oSpeedX = -2;
  } else if (orangeX < 0) {
    oSpeedY = 2;
    oSpeedX = 2;
  }

  // OrangeY
  if (orangeY + 30 > cnv.height) {
    orangeY = cnv.height - 30;
    oSpeedX = 2;
    oSpeedY = -2;
  } else if (orangeY < 0) {
    oSpeedX = -2;
    oSpeedY = 2;
  }

  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Blue Square
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, 200, 30, 30);

  // Draw Green Square
  ctx.fillStyle = "green ";
  ctx.fillRect(100, greenY, 30, 30);
  // Draw Green Square
  ctx.fillStyle = " orange ";
  ctx.fillRect(orangeX, orangeY, 30, 30);

  requestAnimationFrame(loop);
}
