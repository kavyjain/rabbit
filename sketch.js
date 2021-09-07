var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

funtion applefun(){
apple=createSprite(ramdom(50,350),40,10,10);
apple.addImage(appleImge);
apple.scale=0.2;
apple.velocityY=2;
apple.setlifetimeEach(-1);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

var select_sprite =Mathround(ramdam(-1,2))
if (framcount % 80 ==0)






  drawSprites();
}



