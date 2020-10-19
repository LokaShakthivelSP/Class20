var fixedRect,movableRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movableRect=createSprite(200,200,80,30);

  fixedRect.shapeColor="green";
  movableRect.shapeColor="green";
  movableRect.velocityX=4;
  fixedRect.velocityX=-4;
}

function draw() {
  background(255,255,255);  
  //movableRect.x=mouseX;
  //movableRect.y=mouseY;

  if(fixedRect.x-movableRect.x<fixedRect.width/2+movableRect.width/2
    &&movableRect.x-fixedRect.x<fixedRect.width/2+movableRect.width/2
    &&fixedRect.y-movableRect.y<fixedRect.height/2+movableRect.height/2
    &&movableRect.y-fixedRect.y<fixedRect.height/2+movableRect.height/2){
    fixedRect.shapeColor="red";
    movableRect.shapeColor="red";
    movableRect.velocityX=-(movableRect.velocityX);
    fixedRect.velocityX=-(fixedRect.velocityX);
  }
  drawSprites();
}