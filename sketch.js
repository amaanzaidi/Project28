const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1 = new ground(400,615,800,100);
tree1 = new tree(600,400,10,10);
  mango1= new mango(600,300,20);
  mango2= new mango(500,300,20);
  mango3= new mango(650,350,20);
  mango4= new mango(500,400,20);
  mango5= new mango(550,400,20);
  mango6= new mango(650,300,20);
  mango7= new mango(450,350,20);
  mango8= new mango(700,290,20);
  stone1 = new stone(50,490,20);
  boy1 = new boy(100,530,10,20);
  catapult1 = new catapult(stone1.body,{x:70,y:480});
}


function draw() {
	background("lightblue");
	Engine.update(engine);
	ground1.display();
	tree1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	 mango6.display();
	 mango7.display();
	 mango8.display();
	 boy1.display();
	 stone1.display();
	 catapult1.display();
	 detectCollision(stone1,mango1);
	 detectCollision(stone1,mango2);
	 detectCollision(stone1,mango3);
	 detectCollision(stone1,mango4);
	 detectCollision(stone1,mango5);
	 detectCollision(stone1,mango6);
	 detectCollision(stone1,mango7);
	 detectCollision(stone1,mango8);

	 drawSprites();
	
  }
  function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
	}
	function mouseReleased(){
		catapult1.fly();
	}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone1.body,{x:70,y:480});
	catapult1.attach(stone1.body,{x:70,y:480});
}
}
function detectCollision(stone1,mango1){
	mangoBodyPosition=mango1.body.position
	stoneBodyPosition=stone1.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango1.r+stone1.r){
		Matter.Body.setStatic(mango1.body,false);

	}
}

