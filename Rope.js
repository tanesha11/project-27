class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            stiffness: 0.04,
            length: 10,
            'isStatic': true,
            pointB:{x:this.offsetX, y:this.offsetY}
    
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    display(){
        if(this.rope.bodyA){
            var bodyA = this.rope.bodyA.position;
            var pointB = this.pointB;
        }
    }
    
}