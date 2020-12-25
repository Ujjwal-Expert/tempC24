const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var  box, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    box = new Box(200,300,50,50);
    box1 = new Box(240,90,50,100);
    ground = new Ground(200,height,400,20);
    pig = new Pig(200,100);
    log = new Log(100,300,100,PI/2);

   

    }

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box1.body.angle);

    box1.display();
    box.display();
    ground.display();
    pig.display();
    log.display();
    
}