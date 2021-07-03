class Stand {
    constructor(x,y,width,height){
var opt = {
    isStatic : true
}
this.body = Bodies.rectangle(x,y,width,height,opt)
this.width = width;
this.height = height;
World.add(world,this.body);


    }



    display(){

        var angle = this.body.angle
        strokeWeight(2);
        fill ("brown");
        push ()
        translate(this.body.position.x,this.body.position.y) 
rotate(angle)
rectMode(CENTER)
rect(0,0,width,this.height)
pop ();








    }
}