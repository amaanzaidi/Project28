class mango{
    constructor(x,y,r){
        var Options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Plucking mangoes/mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,Options)
        World.add(world,this.body)
    }
    display(){
    
        var pos=this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,50,50);
           
   
   }
   
}