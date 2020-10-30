var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var logSprite1,logSprite2,logSprite3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX = 3
	

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 3

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	logSprite1 = createSprite(400,height-50,200,20)
	logSprite1.shapeColor = ("red")

	logSprite2 = createSprite(500,height-90,20,100)
	logSprite2.shapeColor = ("red")

	logSprite3 = createSprite(300,height-90,20,100)
	logSprite3.shapeColor = ("red")



	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0 , 200 , 5 , {restitution:0.55, isStatic:true});

	World.add(world, packageBody);

	//log1 = new Log(400,height-45,200,20)
	//log2 = new Log(500,height-80,20,100)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  packageSprite.velocityX = 3

  packageSprite.collide(groundSprite);
  packageSprite.collide(logSprite1);
  packageSprite.collide(logSprite2);
  packageSprite.collide(logSprite3);

if(packageSprite.isTouching(logSprite1)){

	packageSprite.velocityX = 0
	packageSprite.velocityY = 0
}

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	Body.setStatic( packageBody,false)
	helicopterSprite.velocityX = 0
	packageSprite.velocityX = 0
	packageSprite.velocityY = 12
	
	
  }
}



