/*//name spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//variables
var engine,world,object,option,ball,option1;
function setup() 
{
  createCanvas(400,400);
  //creating engine
  engine=Engine.create();
  //creating world
  world=engine.world;
  option={
    isStatic:true
  }
  option1={
    restitution:1.0
  }
  //creating object
  object=Bodies.rectangle(200,390,400,20,option);
  ball=Bodies.circle(200,100,20,option1);
  //adding in world
  World.add(world,object);
  World.add(world,ball);
  console.log(object.position.x);//to print object property
  console.log(object.position.y);//to print object property
}
function draw()
{
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}*/
var car,wall,speed,weight,deformation;
var box1,box2,box3;
var line1;
function setup()
{
  createCanvas(950,400);
  speed=random(50,90);
  weight=random(400,1500);
  line1=createSprite(475,200,950,20);
  //creating a car
  car=createSprite(30,100,50,50);
  car.velocityX=speed;
  car.shapeColor="pink";
  //creating wall for to car to collide
  wall=createSprite(940,200,20,400);
  wall.shapeColor="yellow";
  
  box1=createSprite(30,300,50,50);
  box1.shapeColor=color(255,0,0);
  box1.visible=false;

  box2=createSprite(130,300,50,50);
  box2.shapeColor=color(230,230,0);
  box2.visible=false;

  box3=createSprite(230,300,50,50);
  box3.shapeColor=color(0,255,0);
  box3.visible=false;

  console.log(deformation);
  console.log("Weight "+weight);
  console.log("Speed" +speed);
}
function draw()
{
  background("black");
  
  if(car.x-wall.x<car.width+wall.width/2)
  {
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180)
    {
      box1.visible=true;
      console.log("Rating is D-");
    }
    if(deformation>100 && deformation<=180)
    {
      box2.visible=true;
      console.log("Rating is B+");
    }
    if(deformation<100)
    {
      box3.visible=true;
      console.log("Rating is A-");
    }
    
  }
  drawSprites();

}