class chain {
    constructor(bodyA, bodyB){
        var constraintOption = {
            bodyA: bird.body,
            bodyB: constraintLog.body,
            stiffness:0.04,
            length:10
        }
        
this.chain = constraint.create(constraintOption);
World.add(world, this.chain);
    }
    display () {
        
        var pointA  = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

       // line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
   
}