class Paper{
    constructor(x,y){
       var option={
        restitution:0.3,
        friction:0.5,
        density:1.3
       }
       this.body = Bodies.circle(x,y,5,option);
       this.x=x;
       this.y=y;
       this.image=loadImage("paper.png");
       World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white")
        ellipse( 0, 0, 30);
        pop();
     imageMode(CENTER);
     image(this.image,pos.x,pos.y, 40,40);
    }
}