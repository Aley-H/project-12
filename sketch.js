var ground, groundImage, invisibleBoundary
var trex ,trex_running, invisibleGround;
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 165, 20, 20)
 trex.addAnimation("trexLabel", trex_running)
 trex.scale = 0.5

 ground = createSprite(300, 180, 600, 10)
 ground.addImage("label_ground", groundImage)

invisibleGround = createSprite(300, 190, 600, 10)

invisibleGround.visible=false

invisibleBoundary = createSprite(300, 80, 600, 10)

invisibleBoundary.visible = false

}

function draw(){
  background("black")
  if (keyDown("space")){
    trex.velocityY=-4
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround)
  trex.collide(invisibleBoundary)

ground.velocityX=-4

if (ground.x<0){
  ground.x=ground.width/2
}
drawSprites()
}
