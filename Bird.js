class Bird{
    constructor(){
        this.body = createSprite(50,200);
        this.body.addImage(BirdImg)
        this.body.debug=true
        this.body.setCollider("circle",0,15,50)
    }
    gravity(){
        this.body.velocityY+=1
    }
    fly(){
        this.body.velocityY=-12
    }

}