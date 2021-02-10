class fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1,
            length:45
        }
        this.fly = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.fly);

    }
    fly(){
        this.fly.bodyA =null;
    }
    display(){
        if(this.fly.bodyA){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}