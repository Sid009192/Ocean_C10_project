
var ship , sea  , ship_movement , ocean

function preload(){
ship_movement = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")
ocean_image= loadImage("sea.png")
}

function setup(){
  createCanvas(1683,900);

  ocean = createSprite(800,400,1600,600)
  ship = createSprite(741,500,20,20)
  ocean.addImage(ocean_image)
  ship.addAnimation("ship movement" , ship_movement)
  ship.scale = 0.5
  ocean.scale=0.9

  ocean.velocityX = -4
  
}



function draw() {
  background("blue");
  

  if (ocean.x < 150){
    ocean.x = ocean.width/3

  }




  drawSprites();
}


