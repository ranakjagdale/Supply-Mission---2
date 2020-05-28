var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 //Create a Box
	box1 = Bodies.rectangle(width/2, 630, 200, 20 , {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(width/2-100, 600, 20, 100 , {isStatic:true} );
	World.add(world, box2);

	box3 = Bodies.rectangle(width/2+100, 600, 20, 100 , {isStatic:true} );
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  display();
  keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);   
  }
}
function display(){
	var pos =box1.position;
	rectMode(CENTER);
	fill("red");
	rect(pos.x, pos.y+20, 200, 20);

	pos =box2.position;
	rectMode(CENTER);
	fill("red");
	rect(pos.x-10, pos.y+10, 20, 100);

	pos =box3.position;
	rectMode(CENTER);
	fill("red");
	rect(pos.x+10, pos.y+10, 20, 100);
}



