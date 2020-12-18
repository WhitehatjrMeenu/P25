
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(150,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(600,650);
	
	

	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-120});

    
  	}
}





