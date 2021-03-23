const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10,bowlingBall;
var backgroundImg,shotSling;

function preload(){
  backgroundImg=loadImage("bowlingBack.jpg");

}

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  //first layer
  pin1=new Pins(580,30,30,60);
  pin2=new Pins(650,30,30,60);
  pin3=new Pins(720,30,30,60);
  pin4=new Pins(790,30,30,60);
  //second layer
  pin5=new Pins(615,70,30,60);
  pin6=new Pins(685,70,30,60);
  pin7=new Pins(755,70,30,60);
  //third layer
  pin8=new Pins(650,110,30,60);
  pin9=new Pins(720,110,30,60);
  //last layer
  pin10=new Pins(685,150,30,60);

  bowlingBall=new Ball(685,570,80,80);

  shotSling=new Sling(bowlingBall.body,{x:685,y:570});

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

 //fill("blue");
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  //fill("red");
  pin5.display();
  pin6.display();
  pin7.display();
  // fill("yellow");
  pin8.display();
  pin9.display();
  //fill("white");
  pin10.display();
  //fill("orange");
  bowlingBall.display();

 shotSling.display();
  
}

function mouseDragged(){
  Matter.Body.setPositon(bowlingBall.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shotSling.fly();
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPositon(bowlingBall.body,{x:685,y:570});
    shotSling.attach(bowlingBall);
  }
}