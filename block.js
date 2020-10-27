class block {
    constructor(x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{static:true});
        this.width = width; this.height = height;
        World.add(world,this.body);
        Body.setStatic(this.body,true);
    }

    display() {
        var pos = this.body.position;
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }

}