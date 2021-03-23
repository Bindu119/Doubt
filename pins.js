class Pins{
    constructor(x,y,height,width){
        var options = {
            'isStatic':true,
            'friction':1.0

        }
        this.pin=Bodies.rectangle(x,y,width,height,options);
        this.pinImg=loadImage("pin.png");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        World.add(world,this.pin);
    }
    display(){

        imageMode(CENTER);
        image(this.pinImg,this.x,this.y,this.height,this.width);
    }
}