
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.render;
var mango1,mango2,mango3,mango4,mango5;
var treeobj,groundobj,stoneobj, launcherobj,boy;
var world;

function preload()
{
  boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

 stoneobj = new stone(235,420,30,60);
 mango1 = new mango(1000,100,30)
 mango2 = new mango(850,250,30)
 mango3 = new mango(1150,230,30)
 mango4 = new mango(1000,250,30)
 mango5 = new mango(950,60,30)
 treeobj = new tree(1000,600);
 groundobj = new ground(width/2,600,width,20);
 launcherobj = new launcher(stoneobj.body,{x:235 , y:420});

 	Engine.run(engine);
  //Render.run(render)
}


function draw() {
 
  background(230);

  fill("green");
  textSize(18);
  text("press space for another chance",50,50);
  image(boyImg,200,340,200,300);



  stoneobj.display();
  treeobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundobj.display()
  launcherobj.display();
  
  
  detectCollision(stoneobj,mango1);
  detectCollision(stoneobj,mango2);
  detectCollision(stoneobj,mango3);
  detectCollision(stoneobj,mango4);
  detectCollision(stoneobj,mango5);



}

function mouseDragged() {

  Matter.Body.setPosition(stoneobj.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {

  launcherobj.fly()

}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stoneobj.body,{x: 235, y: 420})
    launcherobj.attach(stoneobj.body)
  
  }
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position


  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}
 


