var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0,0,0);

	//rect1 = Bodies.rectangle(250,600,100,20,{restitution:0.4,isStatic:false});
     
    rect1 = createSprite(250,620,20,100);
	rect2 = createSprite(450,620,20,100);
	rect3 = createSprite(340,665,200,10);
	rect2.shapeColor = "red";
	rect3.shapeColor = "red";
	rect1.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
    /*rect1 = Bodies.rectangle(250,620,20,100,{isStatic:true});
    rect2 = Bodies.rectangle(450,620,20,100,{isStatic:true});
    rect3 = Bodies.rectangle(340,650,200,20,{isStatic:true}) 
    World.add(world,rect1,rect2,rect3);
*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//packageSprite.collide(rect3);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 
  //rect(rect1.x,rect1.y,rect1.width,rect1.height); 
   keyPressed();
  drawSprites();
  }

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.setStatic(packageBody,false);
   //Matter.Body.setStatic(rect3,true);

  }
}



