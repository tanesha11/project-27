
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject,rope1;
var rope2, rope3, rope4, rope5;
var bobDiameter = Bob.diameter;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,650,20);
	bobObject2 = new Bob(240,650,20);
	bobObject3 = new Bob(280,650,20);
	bobObject4 = new Bob(320,650,20);
	bobObject5 = new Bob(360,650,20);

	roofObject = new Roof(275,550,300,20);

	rope1 = new Rope(bobObject1.body,roofObject.body,-Bob.Diameter*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-Bob.Diameter*2,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-Bob.Diameter*2,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,-Bob.Diameter*2,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,-Bob.Diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}



