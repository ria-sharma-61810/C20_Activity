
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;
var ball2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var ball2_options ={
     restitution : 0.50
   }
   var ground_options ={
     isStatic: true
   };
   var wall_options ={
     isStatic:true
   }
  

  ground = Bodies.rectangle(200,370,400,20,ground_options);
  World.add(world,ground);
  wall = Bodies.rectangle(325,200,150,10,wall_options);
  World.add(world,wall);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(320,10,20,ball2_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,150,10);
  ellipse(ball2.position.x,ball2.position.y,20)
 
}

