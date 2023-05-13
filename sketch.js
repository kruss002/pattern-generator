let canvas;

function setup(){
  canvas = createCanvas(400, 400)
  canvas.position(540, 740);
  canvas.background(255);

  checkbox1 = createCheckbox('U.S.A', false);
  checkbox1.position(20, 740);
  checkbox2 = createCheckbox('Italy', false);
  checkbox2.position(20, 765)
  checkbox3 = createCheckbox('U.A.E', false);
  checkbox3.position(20, 790);
  checkbox4 = createCheckbox('Vietnam', false);
  checkbox4.position(20, 815);
  checkbox5 = createCheckbox('Japan', false);
  checkbox5.position(20, 840);
  checkbox6 = createCheckbox('South Africa', false);
  checkbox6.position(20, 865);
  checkbox7 = createCheckbox('Israel', false);
  checkbox7.position(20, 890);
  checkbox8 = createCheckbox('Singapore', false);
  checkbox8.position(20, 915);
  checkbox9 = createCheckbox('Argentina', false);
  checkbox9.position(20, 940);
  checkbox10 = createCheckbox('Taiwan', false);
  checkbox10.position(20, 965);
  checkbox11 = createCheckbox('Nepal', false);
  checkbox11.position(20, 990);
  checkbox12 = createCheckbox('Phillipines', false);
  checkbox12.position(20, 1015);
  checkbox13 = createCheckbox('Nigeria', false);
  checkbox13.position(20, 1040);
  checkbox14 = createCheckbox('Sweden', false);
  checkbox14.position(20, 1065);
  checkbox15 = createCheckbox('Azerbaijan', false);
  checkbox15.position(20, 1090);
  checkbox16 = createCheckbox('Norway', false);
  checkbox16.position(20, 1115);
  checkbox17 = createCheckbox('South Korea', false);
  checkbox17.position(20, 1140);
  checkbox18 = createCheckbox('Netherlands', false);
  checkbox18.position(20, 1165);
  checkbox19 = createCheckbox('Malaysia', false);
  checkbox19.position(20, 1190);
  checkbox20 = createCheckbox('China', false);
  checkbox20.position(20, 1215);
  
  checkbox21 = createCheckbox('Spain', false);
  checkbox21.position(160, 740);
  checkbox22 = createCheckbox('Saudi Arabia', false);
  checkbox22.position(160, 765);
  checkbox23 = createCheckbox('India', false);
  checkbox23.position(160, 790);
  checkbox24 = createCheckbox('Thailand', false);
  checkbox24.position(160, 815);
  checkbox25 = createCheckbox('Portugal', false);
  checkbox25.position(160, 840);
  checkbox26 = createCheckbox('Morocco', false);
  checkbox26.position(160, 865);
  checkbox27 = createCheckbox('Ireland', false);
  checkbox27.position(160, 890);
  checkbox28 = createCheckbox('Greece', false);
  checkbox28.position(160, 915);
  checkbox29 = createCheckbox('Canada', false);
  checkbox29.position(160, 940);
  checkbox30 = createCheckbox('Egypt', false);
  checkbox30.position(160, 965);
  checkbox31 = createCheckbox('Australia', false);
  checkbox31.position(160, 990);
  checkbox32 = createCheckbox('Hong Kong', false);
  checkbox32.position(160, 1015);
  checkbox33 = createCheckbox('Poland', false);
  checkbox33.position(160, 1040);
  checkbox34 = createCheckbox('Belgium', false);
  checkbox34.position(160, 1065);
  checkbox35 = createCheckbox('Switzerland', false);
  checkbox35.position(160, 1090);
  checkbox36 = createCheckbox('Turkey', false);
  checkbox36.position(160, 1115);
  checkbox37 = createCheckbox('France', false);
  checkbox37.position(160, 1140);
  checkbox38 = createCheckbox('Mexico', false);
  checkbox38.position(160, 1165);
  checkbox39 = createCheckbox('Indonesia', false);
  checkbox39.position(160, 1190);
  checkbox40 = createCheckbox('U.K', false);
  checkbox40.position(160, 1215);
  
  checkbox41 = createCheckbox('Oil and Energy', false);
  checkbox41.position(300, 740);
  checkbox42 = createCheckbox('Education', false);
  checkbox42.position(300, 765);
  checkbox43 = createCheckbox('Technology and Software', false);
  checkbox43.position(300, 790);
  checkbox44 = createCheckbox('Politics', false);
  checkbox44.position(300, 815);
  checkbox45 = createCheckbox('Medicine', false);
  checkbox45.position(300, 840);
  checkbox46 = createCheckbox('Finance', false);
  checkbox46.position(300, 865);
  checkbox47 = createCheckbox('Non Work Related', false);
  checkbox47.position(300, 890);
}

function draw() {
  canvas.background(255);
  generate();
}

function generate() {
  // Initialize the z-index to 1
  zIndex = 1;

  // check which checkboxes are selected and call the corresponding sketch functions
  if (checkbox1.checked()) {
    drawSketch1(canvas, zIndex);
    zIndex++;
  }
  if (checkbox2.checked()) {
    drawSketch2(canvas, zIndex);
    zIndex++;
  }
  if (checkbox3.checked()) {
    drawSketch3(canvas, zIndex);
    zIndex++;
  }
  if (checkbox4.checked()) {
    drawSketch4(canvas, zIndex);
    zIndex++;
  }
  if (checkbox5.checked()) {
    drawSketch5(canvas, zIndex);
    zIndex++;
  }
  if (checkbox6.checked()) {
    drawSketch6(canvas, zIndex);
    zIndex++;
  }
  if (checkbox7.checked()) {
    drawSketch7(canvas, zIndex);
    zIndex++;
  }
  if (checkbox8.checked()) {
    drawSketch8(canvas, zIndex);
    zIndex++;
  }
  if (checkbox9.checked()) {
    drawSketch9(canvas, zIndex);
    zIndex++;
  }
  if (checkbox10.checked()) {
    drawSketch10(canvas, zIndex);
    zIndex++;
  }
  if (checkbox11.checked()) {
    drawSketch11(canvas, zIndex);
    zIndex++;
  }
  if (checkbox12.checked()) {
    drawSketch12(canvas, zIndex);
    zIndex++;
  }
  if (checkbox13.checked()) {
    drawSketch13(canvas, zIndex);
    zIndex++;
  }
  if (checkbox14.checked()) {
    drawSketch14(canvas, zIndex);
    zIndex++;
  }
  if (checkbox15.checked()) {
    drawSketch15(canvas, zIndex);
    zIndex++;
  }
  if (checkbox16.checked()) {
    drawSketch16(canvas, zIndex);
    zIndex++;
  }
  if (checkbox17.checked()) {
    drawSketch17(canvas, zIndex);
    zIndex++;
  }
  if (checkbox18.checked()) {
    drawSketch18(canvas, zIndex);
    zIndex++;
  }
  if (checkbox19.checked()) {
    drawSketch19(canvas, zIndex);
    zIndex++;
  }
  if (checkbox20.checked()) {
    drawSketch20(canvas, zIndex);
    zIndex++;
  }
  if (checkbox21.checked()) {
    drawSketch21(canvas, zIndex);
    zIndex++;
  }
  if (checkbox22.checked()) {
    drawSketch22(canvas, zIndex);
    zIndex++;
  }
  if (checkbox23.checked()) {
    drawSketch23(canvas, zIndex);
    zIndex++;
  }
  if (checkbox24.checked()) {
    drawSketch24(canvas, zIndex);
    zIndex++;
  }
  if (checkbox25.checked()) {
    drawSketch25(canvas, zIndex);
    zIndex++;
  }
  if (checkbox26.checked()) {
    drawSketch26(canvas, zIndex);
    zIndex++;
  }
  if (checkbox27.checked()) {
    drawSketch27(canvas, zIndex);
    zIndex++;
  }
  if (checkbox28.checked()) {
    drawSketch28(canvas, zIndex);
    zIndex++;
  }
  if (checkbox29.checked()) {
    drawSketch29(canvas, zIndex);
    zIndex++;
  }
  if (checkbox30.checked()) {
    drawSketch30(canvas, zIndex);
    zIndex++;
  }
  
  if (checkbox31.checked()) {
    drawSketch31(canvas, zIndex);
    zIndex++;
  }
  if (checkbox32.checked()) {
    drawSketch32(canvas, zIndex);
    zIndex++;
  }
  if (checkbox33.checked()) {
    drawSketch33(canvas, zIndex);
    zIndex++;
  }
  if (checkbox34.checked()) {
    drawSketch34(canvas, zIndex);
    zIndex++;
  }
  if (checkbox35.checked()) {
    drawSketch35(canvas, zIndex);
    zIndex++;
  }
  if (checkbox36.checked()) {
    drawSketch36(canvas, zIndex);
    zIndex++;
  }
  if (checkbox37.checked()) {
    drawSketch37(canvas, zIndex);
    zIndex++;
  }
  if (checkbox38.checked()) {
    drawSketch38(canvas, zIndex);
    zIndex++;
  }
  if (checkbox39.checked()) {
    drawSketch39(canvas, zIndex);
    zIndex++;
  }
  if (checkbox40.checked()) {
    drawSketch40(canvas, zIndex);
    zIndex++;
  }
  if (checkbox41.checked()) {
    drawSketch41(canvas, zIndex);
    zIndex++;
  }
  if (checkbox42.checked()) {
    drawSketch42(canvas, zIndex);
    zIndex++;
  }
  if (checkbox43.checked()) {
    drawSketch43(canvas, zIndex);
    zIndex++;
  }
  if (checkbox44.checked()) {
    drawSketch44(canvas, zIndex);
    zIndex++;
  }
  if (checkbox45.checked()) {
    drawSketch45(canvas, zIndex);
    zIndex++;
  }
  if (checkbox46.checked()) {
    drawSketch46(canvas, zIndex);
    zIndex++;
  }
  if (checkbox47.checked()) {
    drawSketch47(canvas, zIndex);
    zIndex++;
  }
}

function drawSketch1(graphics, zIndex) {
  fill("rgb(188,153,170)");
  rect(0, 0, 400, 100);
  rect(0, 200, 400, 100);
}

function drawSketch2(graphics, zIndex) {
  fill("rgb(169,125,113)");
  rect(100, 0, 200, 400);
}

function drawSketch3(graphics, zIndex) {
  fill("rgb(148,126,117)");
  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(200, 100);
  vertex(170, 170);
  vertex(100, 200);
  vertex(0, 150);
  endShape(CLOSE);

  beginShape();
  vertex(400, 0);
  vertex(250, 0);
  vertex(200, 100);
  vertex(230, 170);
  vertex(300, 200);
  vertex(400, 150);
  endShape(CLOSE);

  beginShape();
  vertex(400, 400);
  vertex(400, 250);
  vertex(300, 200);
  vertex(230, 230);
  vertex(200, 300);
  vertex(250, 400);
  endShape(CLOSE);

  beginShape();
  vertex(0, 400);
  vertex(150, 400);
  vertex(200, 300);
  vertex(170, 230);
  vertex(100, 200);
  vertex(0, 250);
  endShape(CLOSE);
}

function drawSketch4(graphics, zIndex) {
  fill("rgb(225,79,35)");
  ellipse(200, 200, 460, 400);
  fill(255);
  triangle(0, 100, 200, 200, 0, 300);
  triangle(400, 100, 200, 200, 400, 300);
}

function drawSketch5(graphics, zIndex) {
  fill("rgb(245,214,221)");
  circle(200, 200, 400);
}

function drawSketch6(graphics, zIndex) {
  fill(255);
  rect(50, 100, 300, 200);

  fill("rgb(105,108,108)");
  triangle(0, 0, 200, 200, 0, 400);
  triangle(400, 0, 200, 200, 400, 400);

  triangle(0, 100, 100, 200, 0, 300);
  triangle(400, 100, 300, 200, 400, 300);

  fill(255);
  triangle(100, 200, 50, 150, 50, 250);
  triangle(300, 200, 350, 150, 350, 250);
}

function drawSketch7(graphics, zIndex) {
  fill("rgb(138,163,223)");
  triangle(0, 100, 400, 100, 200, 400);
  triangle(0, 300, 400, 300, 200, 0);

  line(0, 100, 400, 100);
  line(400, 100, 200, 400);
  line(0, 100, 200, 400);
}

function drawSketch8(graphics, zIndex) {
  fill("rgb(252,212,216)");
  beginShape();
  vertex(100, 50);
  vertex(200, 0);
  vertex(300, 50);
  vertex(300, 350);
  vertex(200, 400);
  vertex(100, 350);
  endShape(CLOSE);
}

function drawSketch9(graphics, zIndex) {
  fill("rgb(217,208,163)");
  stroke(55);
  beginShape();
  vertex(200, 0);
  vertex(400, 200);
  vertex(200, 400);
  vertex(0, 200);
  endShape(CLOSE);
  
  fill("rgb(255,255,255)");
  beginShape();
  vertex(200, 100);
  vertex(300, 200);
  vertex(200, 300);
  vertex(100, 200);
  endShape(CLOSE);
}

function drawSketch10(graphics, zIndex) {
  fill("rgb(196,48,78)");
  triangle(0, 200, 100, 0, 200, 200);
  triangle(200, 200, 300, 0, 400, 200);
  triangle(0, 400, 100, 200, 200, 400);
  triangle(200, 400, 300, 200, 400, 400);
}

function drawSketch11(graphics, zIndex) {
  fill("rgb(201,71,116)");
  beginShape();
  vertex(100, 0);
  vertex(200, 100);
  vertex(100, 200);
  vertex(0, 100);
  endShape(CLOSE);

  beginShape();
  vertex(300, 0);
  vertex(400, 100);
  vertex(300, 200);
  vertex(200, 100);
  endShape(CLOSE);

  beginShape();
  vertex(100, 200);
  vertex(200, 300);
  vertex(100, 400);
  vertex(0, 300);
  endShape(CLOSE);

  beginShape();
  vertex(300, 200);
  vertex(400, 300);
  vertex(300, 400);
  vertex(200, 300);
  endShape(CLOSE);
}

function drawSketch12(graphics, zIndex) {
  fill("rgb(154,96,87)");
  beginShape();
  vertex(200, 0);
  vertex(400, 200);
  vertex(200, 400);
  vertex(0, 200);
  endShape(CLOSE);

  fill(255);
  
  push();
  let centerX = width / 2;
  let centerY = height / 2;
  translate(centerX, centerY);
  
  for (let i = 0; i < 20; i++) {
    ellipse(0, 40, 30, 70);
    rotate(PI / 5);
  }
  pop();  
}

function drawSketch13(graphics, zIndex) {
  fill("rgb(87,176,140)");
  rect(100, 0, 200, 400);

  fill(255);
  beginShape();
  vertex(0, 200);
  vertex(200, 100);
  vertex(400, 200);
  vertex(200, 300);
  endShape(CLOSE);
}

function drawSketch14(graphics, zIndex) {
  strokeWeight(4);
  fill("rgb(157,162,63)");
  beginShape();
  vertex(200, 0);
  bezierVertex(65, 200, 65, 200, 200, 400);
  bezierVertex(335, 200, 335, 200, 200, 0);
  endShape();
  line(200, 0, 200, 400);
  line(100, 200, 300, 200);
}

function drawSketch15(graphics, zIndex) {
  fill("rgb(170,149,128)");
  beginShape();
  vertex(150, 150);
  vertex(200, 0);
  vertex(250, 150);
  vertex(400, 200);
  vertex(250, 250);
  vertex(200, 400);
  vertex(150, 250);
  vertex(0, 200);
  endShape(CLOSE);

  fill("rgb(255,255,255)");
  circle(200, 200, 140);
}

function drawSketch16(graphics, zIndex) {
  fill("rgb(179,57,95)");
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(200, 100);
  vertex(200, 200);
  vertex(100, 200);
  endShape(CLOSE);

  beginShape();
  vertex(400, 0);
  vertex(200, 100);
  vertex(200, 200);
  vertex(300, 200);
  endShape(CLOSE);

  beginShape();
  vertex(400, 400);
  vertex(300, 200);
  vertex(200, 200);
  vertex(200, 300);
  endShape(CLOSE);

  beginShape();
  vertex(0, 400);
  vertex(200, 300);
  vertex(200, 200);
  vertex(100, 200);
  endShape(CLOSE);

  fill(255);
  circle(200, 200, 100);
  strokeWeight(3);
}

function drawSketch17(graphics, zIndex) {
  fill("rgb(226,216,222)");
  circle(200, 200, 300);
  strokeWeight(5);
  line(200, 50, 200, 350);
  line(50, 200, 350, 200);
}

function drawSketch18(graphics, zIndex) {
  fill("rgb(95,79,124)");
  square(0, 0, 100);
  square(0, 300, 100);
  square(300, 0, 100);
  square(300, 300, 100);
}

function drawSketch19(graphics, zIndex) {
  fill("rgb(193,153,158)");
  circle(50, 50, 100);
  circle(350, 50, 100);
  circle(50, 350, 100);
  circle(350, 350, 100);
}

function drawSketch20(graphics, zIndex) {
  fill("rgb(230,104,35)");
  triangle(0, 100, 100, 100, 100, 0);
  triangle(300, 0, 400, 100, 300, 100);
  triangle(100, 400, 0, 300, 100, 300);
  triangle(300, 400, 400, 300, 300, 300);
}

function drawSketch21(graphics, zIndex) {
  fill("rgb(236,140,37)");
  beginShape();
  vertex(0, 0);
  bezierVertex(70, 20, 70, 20, 100, 100);
  bezierVertex(25, 70, 25, 70, 0, 0);
  endShape();

  beginShape();
  vertex(400, 0);
  bezierVertex(330, 20, 330, 20, 300, 100);
  bezierVertex(375, 70, 375, 70, 400, 0);
  endShape();

  beginShape();
  vertex(400, 400);
  bezierVertex(330, 380, 330, 380, 300, 300);
  bezierVertex(375, 330, 375, 330, 400, 400);
  endShape();

  beginShape();
  vertex(0, 400);
  bezierVertex(70, 380, 70, 380, 100, 300);
  bezierVertex(25, 330, 25, 330, 0, 400);
  endShape();
}

function drawSketch22(graphics, zIndex) {
  fill("rgb(39,129,82)");
  triangle(100, 0, 300, 0, 200, 100);
  triangle(400, 100, 400, 300, 300, 200);
  triangle(100, 400, 300, 400, 200, 300);
  triangle(0, 100, 0, 300, 100, 200);
}

function drawSketch23(graphics, zIndex) {
  fill("rgb(97,117,92)");
  beginShape();
  vertex(200, 200);
  bezierVertex(200, 200, 200, 50, 350, 50);
  bezierVertex(350, 50, 350, 200, 200, 200);
  endShape();

  beginShape();
  vertex(200, 200);
  bezierVertex(200, 200, 200, 350, 350, 350);
  bezierVertex(350, 350, 350, 200, 200, 200);
  endShape();

  beginShape();
  vertex(200, 200);
  bezierVertex(200, 200, 200, 350, 50, 350);
  bezierVertex(50, 350, 50, 200, 200, 200);
  endShape();

  beginShape();
  vertex(200, 200);
  bezierVertex(200, 200, 200, 50, 50, 50);
  bezierVertex(50, 50, 50, 200, 200, 200);
  endShape();
}

function drawSketch24(graphics, zIndex) {
  fill("rgb(75,46,75)");
  beginShape();
  vertex(200, 0);
  bezierVertex(130, 100, 130, 100, 200, 200);
  bezierVertex(270, 100, 270, 100, 200, 0);
  endShape();

  beginShape();
  vertex(400, 200);
  bezierVertex(300, 130, 300, 130, 200, 200);
  bezierVertex(300, 270, 300, 270, 400, 200);
  endShape();

  beginShape();
  vertex(200, 400);
  bezierVertex(130, 300, 130, 300, 200, 200);
  bezierVertex(270, 300, 270, 300, 200, 400);
  endShape();

  beginShape();
  vertex(0, 200);
  bezierVertex(100, 130, 100, 130, 200, 200);
  bezierVertex(100, 270, 100, 270, 0, 200);
  endShape();
}

function drawSketch25(graphics, zIndex) {
  fill("rgb(201,128,2)");
  beginShape();
  vertex(200, 0);
  vertex(250, 100);
  vertex(200, 200);
  vertex(150, 100);
  endShape(CLOSE);

  beginShape();
  vertex(400, 200);
  vertex(300, 250);
  vertex(200, 200);
  vertex(300, 150);
  endShape(CLOSE);

  beginShape();
  vertex(200, 400);
  vertex(150, 300);
  vertex(200, 200);
  vertex(250, 300);
  endShape(CLOSE);

  beginShape();
  vertex(0, 200);
  vertex(100, 150);
  vertex(200, 200);
  vertex(100, 250);
  endShape(CLOSE);
}

function drawSketch26(graphics, zIndex) {
  fill("rgb(130,50,42)");
  circle(200, 200, 285);
  fill(255);
  square(100, 100, 200);
}

function drawSketch27(graphics, zIndex) {
  fill("rgb(189,162,82)");
  circle(150, 150, 142);
  circle(250, 250, 142);
  circle(250, 150, 142);
  circle(150, 250, 142);

  fill(255);
  beginShape();
  vertex(200, 100);
  vertex(300, 200);
  vertex(200, 300);
  vertex(100, 200);
  endShape(CLOSE);
}

function drawSketch28(graphics, zIndex) {
  fill("rgb(185,211,233)");
  square(100, 100, 200);
  fill(255);
  square(150, 150, 100);
}

function drawSketch29(graphics, zIndex) {
  fill("rgb(255,177,177)");
  square(100, 100, 200);

  fill("rgb(255,255,255)");
  beginShape();
  vertex(200, 100);
  vertex(300, 200);
  vertex(200, 300);
  vertex(100, 200);
  endShape(CLOSE);
}

function drawSketch30(graphics, zIndex) {
  fill("rgb(172,131,130)");
  beginShape();
  vertex(0, 200);
  bezierVertex(57, 150, 230, 57, 400, 200);
  bezierVertex(230, 301, 170, 301, 0, 200);
  endShape();

  fill(255);
  ellipse(200, 200, 120, 150);
}

function drawSketch31(graphics, zIndex) {
  fill("rgb(191,104,139)");
  push()
  circle(200, 200, 200);

  angleMode(DEGREES);

  middle = width / 2;
  circles = 20;
  angle = 360 / circles;
  radius = 25;
  circleRadius = sin(angle / 2) * radius;

  for (var i = 0; i < circles; i++) {
    xCircle = middle + cos(angle * i) * 120;
    yCircle = middle - sin(angle * i) * 120;

    ellipse(xCircle, yCircle, circleRadius * 2, circleRadius * 2);
  }

  fill(255);
  angleMode(DEGREES);
  middle = width / 2;
  circles = 20;
  angle = 360 / circles;
  radius = 25;
  circleRadius = sin(angle / 2) * radius;

  for (var i = 0; i < circles; i++) {
    xCircle = middle + cos(angle * i) * 90;
    yCircle = middle - sin(angle * i) * 90;

    ellipse(xCircle, yCircle, circleRadius * 2, circleRadius * 2);
  }
  pop()
}

function drawSketch32(graphics, zIndex) {
  fill("rgb(244,84,92)");
  strokeWeight(1);
  beginShape();
  vertex(200, 100);
  vertex(300, 200);
  vertex(200, 300);
  vertex(100, 200);
  endShape(CLOSE);

  strokeWeight(4);
  line(200, 50, 200, 350);
  line(50, 200, 350, 200);
}

function drawSketch33(graphics, zIndex) {
  fill(255);
  circle(200, 200, 100);

  fill("rgb(248,209,219)");
  circle(200, 200, 35);
  circle(200, 90, 70);
  circle(200, 310, 70);
  circle(200, 28, 53);
  circle(200, 372, 53);
}

function drawSketch34(graphics, zIndex) {
  fill("rgb(156,100,86)");
  push();

  let centerX = width / 2;
  let centerY = height / 2;
  translate(centerX, centerY);

  for (let i = 0; i < 20; i++) {
    ellipse(0, 60, 40, 140);
    rotate(PI / 5);
  }
  pop();
}

function drawSketch35(graphics, zIndex) {
  fill("rgb(255,108,108)");
  rect(150, 100, 100, 200);
  rect(100, 150, 200, 100);
}

function drawSketch36(graphics, zIndex) {
  fill("rgb(232,50,64)");
  circle(200, 200, 180);
  fill(255);
  circle(200, 200, 50);
}

function drawSketch37(graphics, zIndex) {
  fill("rgb(163,76,105)");
  beginShape();
  vertex(200, 100);
  bezierVertex(140, 200, 140, 200, 200, 300);
  bezierVertex(260, 200, 260, 200, 200, 100);
  endShape();
}

function drawSketch38(graphics, zIndex) {
  fill("rgb(123,112,99)");
  push()
  beginShape();
  vertex(100, 0);
  bezierVertex(100, 0, 100, 100, 0, 100);
  endShape();

  beginShape();
  vertex(300, 0);
  bezierVertex(300, 0, 300, 100, 400, 100);
  endShape();

  beginShape();
  vertex(100, 400);
  bezierVertex(100, 400, 100, 300, 0, 300);
  endShape();

  beginShape();
  vertex(300, 400);
  bezierVertex(300, 400, 300, 300, 400, 300);
  endShape();

  noStroke();
  triangle(0, 0, 0, 100, 100, 0);
  triangle(400, 0, 400, 100, 300, 0);
  triangle(400, 400, 400, 300, 300, 400);
  triangle(0, 300, 0, 400, 100, 400);

  angleMode(DEGREES);

  middle = 200;
  circles = 20;
  angle = 360 / circles;
  radius = 40;
  circleRadius = sin(angle / 2) * radius;

  for (var i = 0; i < circles; i++) {
    xCircle = middle + cos(angle * i) * 120;
    yCircle = middle - sin(angle * i) * 120;

    ellipse(xCircle, yCircle, circleRadius * 2, circleRadius * 2);
  }
}

function drawSketch39(graphics, zIndex) {
  strokeWeight(10);
  stroke("rgb(255,220,220)");
  line(50, 125, 50, 50);
  line(350, 125, 350, 50);
  line(50, 50, 350, 50);

  line(100, 75, 100, 125);
  line(300, 75, 300, 125);
  line(100, 75, 300, 75);

  line(50, 350, 50, 275);
  line(350, 350, 350, 275);
  line(350, 350, 50, 350);

  line(100, 325, 100, 275);
  line(300, 325, 300, 275);
  line(100, 325, 300, 325);
}

function drawSketch40(graphics, zIndex) {
  strokeWeight(5);
  stroke("rgb(169,75,114)");
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  line(0, 0, 400, 400);
  line(400, 0, 0, 400);
}

function drawSketch41(graphics, zIndex) {
  fill (220)
  beginShape();
  vertex(200, 160); 
  vertex(220, 210); 
  bezierVertex(230, 240, 170, 240, 180, 210);
  endShape(CLOSE);
}

function drawSketch42(graphics, zIndex) {
  fill(220)
  circle(200,150,30)
  rect(185,165,30,50,12)
}

function drawSketch43(graphics, zIndex) {
  fill(220)
  square(180,180,40)
}

function drawSketch44(graphics, zIndex) {
  fill(220)
  circle(200,200,35)
}

function drawSketch45(graphics, zIndex) {
  fill(220)
  stroke(220)
  rect(180,160,40,80)
  rect(160,180,80,40)
}

function drawSketch46(graphics, zIndex) {
  fill(220)
  rect(160,180,80,40)
}

function drawSketch47(graphics, zIndex) {
  fill(220)
  square(180,180,40);
  triangle(170,180,200,160,230,180)
}
