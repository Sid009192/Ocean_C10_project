
var ship , sea  , ship_movement , ocean

function preload(){
ship_movement = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")
ocean = loadImage("sea.png")
}

function setup(){
  createCanvas(1683,900);

  ocean1 = createSprite(800,400,1000,600)
  ship = createSprite(741,350,20,20)
  ocean1.addImage(ocean)
  ship.addAnimation("ship movement" , ship_movement)
  ship.scale = 0.5
  ocean1.scale=0.6
  
}

function draw() {
  background("blue");
  
  drawSprites();
 
}