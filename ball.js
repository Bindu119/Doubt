class Ball{
    constructor(x,y,a){
        var options={
          'isStatic':true,
          'density':0.1
        }
        this.bowling=Bodies.circle(x,y,a,options);
        this.bowlingImg=loadImage("ball.png");
        this.x=x;
        this.y=y;
        this.a=a;
        World.add(world,this.bowling);
    }

    display(){
        imageMode(CENTER);
        image(this.bowlingImg,this.x,this.y,this.a,this.a);
    }
}