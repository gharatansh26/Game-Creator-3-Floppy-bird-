class Obstacle{
    constructor(x){
        this.body = createSprite(x,700);
      
        this.body.addImage(Tree2)
        this.body.scale=0.5
        this.body.lifetime=300
        this.body2=createSprite(x+600, 150)
        this.body2.addImage(Tree1)
        this.body2.rotation=180
        this.body2.lifetime=300
        this.body2.debug=false
        this.body.setCollider("rectangle",0,0,100,500)
        this.body2.setCollider("rectangle",0,0,100,250)
    }
 
}