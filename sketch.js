var rocket
var astronaut
var wall1
var wall2
var wall3
var wall4
var info

function preload(){
  bathing=loadAnimation("bath1.png","bath2.png") //done
  brushing=loadAnimation("brush.png") //done
  drinking=loadAnimation("drink1.png","drink2.png") //done
  eating=loadAnimation("eat1.png","eat2.png") //done
  gymming1=loadAnimation("gym1.png","gym2.png") //done 
  gymming2=loadAnimation("gym11.png","gym12.png")//done
  sleeping=loadAnimation("sleep.png")//done
  rocketImg=loadAnimation("iss.png") //done
  infoImg=loadAnimation("info.png") //done
}

function setup() {
  createCanvas(1279,627);
  
  rocket=createSprite(670,300)
  rocket.addAnimation("background",rocketImg)
  rocket.scale=0.275
  info=createSprite(30,30)
  info.addAnimation("info",infoImg)
  info.scale=0.2
  astronaut=createSprite(400, 300, 50, 50);
  astronaut.addAnimation("brushing",brushing)
  astronaut.scale=0.15
  wall1=createSprite(5,313.5,10,627)
  wall2=createSprite(1274,313.5,10,627)
  wall3=createSprite(639.5,5,1279,10)
  wall4=createSprite(639.5,622,1279,10)
  wall1.visible=false
  wall2.visible=false
  wall3.visible=false
  wall4.visible=false
  wall1.debug=false
  astronaut.setCollider("rectangle",-200,50,1000,2500)
}

function draw() {
  background(255,255,255);  
  astronaut.bounceOff(wall1)
  astronaut.bounceOff(wall2)
  astronaut.bounceOff(wall3)
  astronaut.bounceOff(wall4)
astronaut.debug=true
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("bathing",bathing)
    astronaut.changeAnimation("bathing")
    astronaut.y=450
    astronaut.x=500
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("drinking",drinking)
    astronaut.changeAnimation("drinking")
    astronaut.y=250
    astronaut.x=700
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eating)
    astronaut.changeAnimation("eating")
    astronaut.y=300
    astronaut.x=600
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("sleeping",sleeping)
    astronaut.changeAnimation("sleeping")
    astronaut.y=300
    astronaut.x=600
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("space")){
    astronaut.addAnimation("gymming1",gymming1)
    astronaut.changeAnimation("gymming1")
    astronaut.y=400
    astronaut.x=800
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("shift")){
    astronaut.addAnimation("gymming2",gymming2)
    astronaut.changeAnimation("gymming2")
    astronaut.y=400
    astronaut.x=600
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("enter")){
    
    astronaut.changeAnimation("brushing")
    astronaut.y=400
    astronaut.x=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("m")){
    applyForce(astronaut)
  }

  drawSprites();
  fill("white")
  textSize(15)
  if (mouseIsOver(info)){
    text("1) press up arrow for bath", 60,30)
    text("2) press down arrow for sleeping", 60,45)
    text("3) press left arrow for drinking", 60,60)
    text("4) press right arrow for eating", 60,75)
    text("5) press space for trademill", 60,90)
    text("6) press shift for stretching", 60,105)
    text("7) press enter for brushing", 60,120)
    text("8) press m for floating", 60,135)
  }
}
function applyForce(sprite){
  sprite.setSpeedAndDirection(random(1,3),random(0,359))
  sprite.rotation=(random(10,80))

}
