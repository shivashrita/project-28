class tree{
    constructor(x,y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x = x;
        this.y = y;
       

        this.image = loadImage("images/tree.png");
        //this.body = Bodies.circle(this.x,this.y,this.r,options);
       // World.add (world,this.body); 
    
    }

    display()
    {
        //var treePos = this.body.position;
        push()
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,-300,400,600);
        pop();


    }   
}

