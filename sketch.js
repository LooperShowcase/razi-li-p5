
let img;
function preload(){
  img = loadImage("logo.png")
  imeg = loadImage("logo2.png")
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.center();
  angleMode(DEGREES)
} 

function draw() {
  background("black");
  translate(width / 2, height / 2);
  image(img, 40, 20, 30, 30)
  image(imeg, -80, 10, 50, 50)
  rotate(-90);

 point(width / 2,height / 2);
  
  let hrs = hour();
  let mins = minute();
  let scs = second();

 stroke("#370617");
 strokeWeight(4);
 noFill();

 let  milliseconds = map(millis(),0,1000,0,360);

 let secondAngle = map(scs, 0, 60, 0, 360);

 let minuteAngle = map(mins, 0, 60, 0, 360);

 let hourAngle = map(hrs % 12, 0, 60, 0, 360);


 stroke("cyan");
 arc(0, 0, 250, 250, 0, secondAngle);

 stroke("white");
 arc(0, 0, 200, 200, 0, minuteAngle) + map(scs, 0, 60, 0, 6);

 stroke("green")
 arc(0, 0, 150, 150, 0, hourAngle);

 stroke("light grey")
  arc(-135, -135, 100, 100, 0, milliseconds);

 push(); 
  rotate(secondAngle);
  stroke("purple")
  line(0, 0, 40, 0);
 pop();

 push();
  rotate(minuteAngle);
  stroke("yellow");
  line(0, 0, 70, 0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke("#e76f51")
  line(0, 0, 80, 0);
  pop();

  // push();
  // rotate(milliseconds);
  // stroke("cyan");
  // line(0, 0, -100, -80);
  // pop();
}
