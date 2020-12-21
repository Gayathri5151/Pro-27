const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	bob1=new Bob()
	bob2=new Bob()
	bob3=new Bob()
	bob4=new Bob()
	bob5=new Bob()

	rope=new Rope()

	roof=new Roof()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope.display()

  roof.display()
  
  drawSprites();
 
}



