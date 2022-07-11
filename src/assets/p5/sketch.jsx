import React from "react";
import p5 from "p5";
let body = document.body;

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.boids = props.boids;
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    const flock = [];
    let boidColor = "#ffffff";
    let alpha = "70";
    let boidSize = 30;
    let numBoids = this.boids;
    let bg = "#00000000";
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, body.clientHeight);
    };

    p.setup = () => {
      p.parent = body;
      var canvas = p.createCanvas(p.windowWidth, body.clientHeight);
      canvas.position(0, 0);
      canvas.style("z-index", "-1");
      p.background(bg);
      for (let i = 0; i < numBoids; i++) {
        flock.push(new Boid(boidColor + alpha, boidSize));
      }
    };

    p.draw = () => {
      p.background(bg);
      p.clear();
      for (let boid of flock) {
        boid.flock(flock);
        boid.update();
        boid.wrap();
        boid.display();
      }
    };

    class Boid {
      constructor(color, size) {
        this.position = p.createVector(p.random(p.width), p.random(p.height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(p.random(2, 4));
        this.accel = p.createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 4;
        this.color = color;
        this.size = size;
      }

      wrap() {
        if (this.position.x > p.width) {
          this.position.x = 0;
        } else if (this.position.x < 0) {
          this.position.x = p.width;
        }
        if (this.position.y > p.height) {
          this.position.y = 0;
        } else if (this.position.y < 0) {
          this.position.y = p.height;
        }
      }

      alignment(boids) {
        let perceptionRadius = 50;
        let total = 0;
        let steering = p.createVector();

        for (let other of boids) {
          let d = p.dist(
            this.position.x,
            this.position.y,
            other.position.x,
            other.position.y
          );
          //IF OTHER BOID IS NOT THIS BOID AND DISTANCE IS LESS THAN A CERTAIN AMOUNT
          if (other !== this && d < perceptionRadius) {
            steering.add(other.velocity);
            total++;
          }
        }

        if (total > 0) {
          steering.div(total);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
      }
      cohesion(boids) {
        let perceptionRadius = 100;
        let total = 0;
        let steering = p.createVector();

        for (let other of boids) {
          let d = p.dist(
            this.position.x,
            this.position.y,
            other.position.x,
            other.position.y
          );
          //IF OTHER BOID IS NOT THIS BOID AND DISTANCE IS LESS THAN A CERTAIN AMOUNT
          if (other !== this && d < perceptionRadius) {
            steering.add(other.position);
            total++;
          }
        }

        if (total > 0) {
          steering.div(total);
          steering.sub(this.position);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
      }
      seperation(boids) {
        let perceptionRadius = 100;
        let total = 0;
        let steering = p.createVector();

        for (let other of boids) {
          let d = p.dist(
            this.position.x,
            this.position.y,
            other.position.x,
            other.position.y
          );
          //IF OTHER BOID IS NOT THIS BOID AND DISTANCE IS LESS THAN A CERTAIN AMOUNT
          if (other !== this && d < perceptionRadius) {
            let diff = p5.Vector.sub(this.position, other.position);
            diff.div(d);
            steering.add(diff);
            total++;
          }
        }

        if (total > 0) {
          steering.div(total);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
      }

      interactWithMouse() {
        let perceptionRadius = 150;
        let total = 0;
        let steering = p.createVector();
        let x = p.mouseX;
        let y = p.mouseY;

        let d = p.dist(this.position.x, this.position.y, x, y);
        //IF OTHER BOID IS NOT THIS BOID AND DISTANCE IS LESS THAN A CERTAIN AMOUNT
        if (d < perceptionRadius) {
          let diff = p5.Vector.sub(this.position, p.createVector(x, y));
          diff.div(d);
          steering.add(diff);
          total++;
        }

        if (total > 0) {
          steering.div(total);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
      }

      flock(boids) {
        let interact = this.interactWithMouse(boids);
        let alignment = this.alignment(boids);
        let cohesion = this.cohesion(boids);
        let seperation = this.seperation(boids);
        this.accel.add(alignment);
        this.accel.add(cohesion);
        this.accel.add(seperation);
        this.accel.add(interact);
      }

      update() {
        this.position.add(this.velocity);
        this.velocity.add(this.accel);
        this.velocity.limit(this.maxSpeed);
        this.accel.mult(0);
      }

      display() {
        let x = p.mouseX;
        let y = p.mouseY;
        p.strokeWeight(this.size);

        let d = p.dist(this.position.x, this.position.y, x, y);
        if (d < 150) {
          p.stroke("#caf0f8");
        } else {
          p.stroke(this.color);
        }

        p.point(this.position.x, this.position.y);
      }
    }
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div className="sketch" ref={this.myRef}></div>;
  }
}

export default Sketch;
