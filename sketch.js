var gamestate="play"
var score=0

function preload(){
  BirdImg=loadImage("Bird.png")
  Tree1=loadImage("TreeImage.png")
  Tree2=loadImage("TreeImage2.png")
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  Bird1 = new Bird()
  Obstacle1 = new Obstacle(Bird1.body.x+2000)
  ObstacleGroup=new Group()
  ObstacleGroup.add(Obstacle1.body)
  ObstacleGroup.add(Obstacle1.body2)



}

function draw() {
background("blue");
textSize(50)
text("Score"+score,Bird1.body.x+1000,100)
  if (gamestate==="play"){
    Bird1.body.velocityX=11 
    camera.position.x=Bird1.body.x+600
    Bird1.gravity();
    if(keyDown("space")){
      Bird1.fly()
    }
    if(frameCount%100===0){
      Obstacle1 = new Obstacle(Bird1.body.x+2000)
      ObstacleGroup.add(Obstacle1.body)
      ObstacleGroup.add(Obstacle1.body2)
    }
    Bird1.body.collide(ObstacleGroup,end)
    if (Bird1.body.y<0||Bird1.body.y>height){
      gamestate="end"
    }
  }
 
    if (gamestate==="end"){
      textSize(100)
    text("Game Over",Bird1.body.x+500,height/2)
    Bird1.body.destroy()
    }
  drawSprites();
}
function end(bird,tree) {
  gamestate="end"
  

}