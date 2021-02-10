class hero {
    constructor(x, y,r) {

        var options ={
            restitution:0.5,
           frictionAir:0.0005,
           density:1
        }
        this.r=r;
        this.y=  y;
        this.r=r;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        imageMode(CENTER);
		image(this.image, 0,0,this.r+150, this.r)
        this.image.scale = 2;
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};