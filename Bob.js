class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'isStatic':true,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius/2,options);
      this.x = x;
      this.y = y;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      fill(255);
      ellipseMode(RADIUS);
      circle(0, 0, this.radius);
      pop();
    }
  };