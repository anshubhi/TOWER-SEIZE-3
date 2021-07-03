const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ball,ballI
var backgroundImg,ball2
var rise = "shine1.png"


function preload() {
ballI = loadImage("enemy.png")

//calling background function
getBackground();
 
}

function setup() {
  engine = Engine.create()
  world = engine.world


  createCanvas(900,400);

  stand1 = new Stand (380,300,150,10);
  street = new Ground();

  // first level
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
 
  // second level
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
 


  //third level
  
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  
  // fourth level

block19 = new Block(370,155,30,40);


ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new Sling(this.ball,{x:200 , y :200});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg); 
  }
   
 Engine.update(engine)

 
 stand1.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block15.display();
  block16.display();
  block17.display();
  
 
  block19.display();
  
  image(ballI,ball.position.x,ball.position.y,30);
  slingShot.display()

  fill ("black")
textSize(20);
  text ("DRAG THE PET TO BREAK THE WALL AND PRESS SPACE TO ATTACH",140,80)


}

function mouseDragged (){

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased (){
  slingShot.fly();
}

function keyPressed (){
  if(keyCode === 32){
    slingShot.attach(this.ball)
  }
}


async function getBackground(){
  

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json()
 

  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)

  console.log(hour)

  if(hour>=05 && hour<07){
     rise = "shine1.jpg"
  }
 
  else if(hour>=07 && hour<=17){
     rise = "noon.jpg"
  }

  else if(hour>17 && hour<19){
     rise = "sunset.jpg"
  }

  else {
     rise = "night.jpg"
  }


backgroundImg = loadImage(rise)
console.log(backgroundImg)
}
