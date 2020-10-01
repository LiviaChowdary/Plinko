const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events,

 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var particle;
var turn = 0;
var gameState = start ;

var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",30,700);
 text("400",90,700);
 text("300",170,700);
 text("200",250,700);
 text("100",330,700);
 text("100",410,700);
 text("200",500,700);
 text("300",580,700);
 text("400",660,700);
 text("500",730,700);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

function mousePressed(){
  if(gameState !=="end"){
  turn++;
  particle = new Particle(mouseX,10,10,10);

  }
}
if(particle!=null){ 
  particle.display(); 

    if(particle.body.position.x<80)
     {
        score=score+500;
        particle=null;
      }
    
    if(particle.body.position.x>80&&particle.body.position.x<160)
    {
      score=score+400;
      particle=null;
    }
    if(particle.body.position.x>160&&particle.body.position.x<240)
    {
      score=score+300;
      particle=null;
    }
    if(particle.body.position.x>240&&particle.body.position.x<320)
    {
      score=score+200;
      particle=null;
    }
    if(particle.body.position.x>320&&particle.body.position.x<400)
    {
      score=score+100;
      particle=null;
    }
    if(particle.body.position.x>400&&particle.body.position.x<480)
    {
      score=score+100;
      particle=null;
    }
    if(particle.body.position.x>480&&particle.body.position.x<560)
    {
      score=score+200;
      particle=null;
    }
    if(particle.body.position.x>560&&particle.body.position.x<640)
    {
      score=score300;
      particle=null;
    }
    if(particle.body.position.x>640&&particle.body.position.x<720)
    {
      score=score+400;
      particle=null;
    }

    if(particle.body.position.x>720&&particle.body.position.x<800)
    {
      score=score+500;
      particle=null;
    }

  if(turn>=5){
    gameState= "end";
  }
}

if(gameState="end"){
  noStroke();
  textSize(100)
  fill("white")
  text("GAME OVER",200,400);
}