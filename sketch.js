var canvas;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;
var ground_options,ball,ground,ball_options;

function setup() {
  canvas= createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground_options -{
    isStatic:true
  }
  ground=Bodies.rectangle(200,100,50,50,ground_options);
  World.add(world,ground);
  ball_options -{
    restitution:3
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ground);
 // console.log(object.type);
 // console.log(object.position.x);
 // console.log(object.position.y);
}

function draw() {
  background("gold");
  Engine.update(engine);
    rectMode(CENTER);
    //rect(400,400,50,50);
    //rect(ground.position.x,ground.position.y,200,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}