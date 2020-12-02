
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	bg = loadImage ("back.jpg");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world
	bob1 = new Bob (400,500,30);
	bob2 = new Bob (470,500,30);
	bob3 = new Bob (540,500,30);
	bob4 = new Bob (610,500,30);
	bob5 = new Bob (680,500,30);
	roof = new Roof (600,200,520,25)
	rope1 = new Rope (bob1.body,roof.body);
	rope2 = new Rope (bob2.body,roof.body);
	rope3 = new Rope (bob3.body,roof.body);
	rope4 = new Rope (bob4.body,roof.body);
	rope5 = new Rope (bob5.body,roof.body);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}
function keyPressed(){
	 if(keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-45, y: -50})
		 }
		 }


