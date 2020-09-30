var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");
     
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("lightblue");

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();

  textSize(20);
  stroke("yellow");
  text("Help your people in this zombie infested area by providing medical kits.",10,300);
  text("To drop medical kits from chopper,",10,340);
  text(" press DOWN ARROW",30,380);

  textSize(25);
  stroke("red");
  text("Danger: THIS IS A ZOMBIE INFESTED AREA",100,100);

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(ground,true);
	textSize(30);
	text("YAY YOU DID IT!!!...YOU ARE TRULY HELPFUL",10,600);

  }

}



