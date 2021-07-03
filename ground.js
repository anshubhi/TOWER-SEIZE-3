class Ground {
    constructor() {
      var option = {
          isStatic: true
      }

      this.body = Bodies.rectangle(450,390,900,20,option);
     
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("brown");
      rect(450,390,900,20);
    }
  };