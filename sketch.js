
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bl,boy,tl;

function preload()
{
	bl = loadImage("boy.png");
	tl = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(100,600);
	boy.addImage(bl);
	boy.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,50);

	mango1= new Mango(350,200,50,50);
	mango2= new Mango(500,200,50,50);
	mango3 = new Mango(425,250,50,50);

	stone = new Stone(50,550,50,50);
	
	tree = new Tree(400,350,500,600);
	
	slingshot = new SlingShot(stone.body,{x:50,y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);

  tree.display();

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  slingshot.display();

  col(stone,mango1);
  col(stone,mango2);
  col(stone,mango3);
 
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function col(ab,bb){

	sbp = ab.body.position;
	mbp = bb.body.position;

	var distance = dist(sbp.x,sbp.y,mbp.x,mbp.y);
	if(distance<=ab.height+bb.height){

		Matter.Body.setStatic(bb.body,false);

	}

}

function keyPressed(){

	if (keyCode = 32){
		Matter.Body.setPosition(stone.body,{x:50,y:550});
		slingshot.attach(stone.body);
	}
	
}

