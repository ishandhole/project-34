const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1;
var monster;

function preload(){
  bg = loadImage("GamingBackground.png");
}

function setup() {
    createCanvas(800,400);
  
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new ground(400,350,800,20);
    monster = new Monster(700,250,200);
    
   

  
    box1 = new Box(400,250,50,50);
    box2 = new Box(400,250,50,50);
    box3 = new Box(400,250,50,50);
    box4 = new Box(400,250,50,50);
    box5 = new Box(400,250,50,50);
    box6 = new Box(400,250,50,50);

    box7 = new Box(500,250,50,50);
    box8 = new Box(500,250,50,50);
    box9 = new Box(500,250,50,50);
    box10 = new Box(500,250,50,50);
    box11= new Box(500,250,50,50);
    box12 = new Box(500,250,50,50);
    

  
    hero1 = new hero(100,200,20);
    hero1.scale = 3;
    
    fly1 = new fly(hero1.body,{x:100,y:200});
    
    
    
    
    
    Engine.update(engine);
  
  }
  
  function draw() {
    background(bg);  
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    hero1.display();
    fly1.display();
    monster.display();
    
  }
  function mouseDragged(){
   
    Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
  
  }
