const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution: 0.2
	}

	ball = Bodies.circle(350, 200, 10, ball_options);
	World.add(world, ball);
	ball2 = Bodies.circle(370, 200, 10, ball_options);
	World.add(world, ball2);
	ball3 = Bodies.circle(390, 200, 10, ball_options);
	World.add(world, ball3);
	ball4 = Bodies.circle(410, 200, 10, ball_options);
	World.add(world, ball4);
	ball5 = Bodies.circle(430, 200, 10, ball_options);
	World.add(world, ball5);


	con = Matter.Constraint.create({
		pointA:{x:350, y:100},
		bodyB:ball,
		pointB: {x:0, y:0},
		length: 100,
		stifness: 0.1
	})
    World.add(world, con);
    con2 = Matter.Constraint.create({
		pointA:{x:380, y:100},
		bodyB:ball2,
		pointB: {x:0, y:0},
		length: 100,
		stifness: 0.1
	})
    World.add(world, con2);
	con3 = Matter.Constraint.create({
		pointA:{x:400, y:100},
		bodyB:ball3,
		pointB: {x:0, y:0},
		length: 100,
		stifness: 0.1
	})
    World.add(world, con3);
	con4 = Matter.Constraint.create({
		pointA:{x:420, y:100},
		bodyB:ball4,
		pointB: {x:0, y:0},
		length: 100,
		stifness: 0.1
	})
    World.add(world, con4);
	con5 = Matter.Constraint.create({
		pointA:{x:440, y:100},
		bodyB:ball5,
		pointB: {x:0, y:0},
		length: 100,
		stifness: 0.1
	})
	World.add(world, con5)

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}

function draw() {
  
  background("#99004d");
  ellipse(ball.position.x, ball.position.y, 10)
  ellipse(ball2.position.x, ball.position.y, 10)
  ellipse(ball3.position.x, ball.position.y, 10)
  ellipse(ball4.position.x, ball.position.y, 10)
  ellipse(ball5.position.x, ball.position.y, 10)
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(225);
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(225);
  line(con2.pointA.x, con2.pointA.y, ball2.position.x, ball2.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(225);
  line(con3.pointA.x, con3.pointA.y, ball3.position.x, ball3.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(225);
  line(con4.pointA.x, con4.pointA.y, ball4.position.x, ball4.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(225);
  line(con5.pointA.x, con5.pointA.y, ball5.position.x, ball5.position.y);
  pop();

  //roof.display();


  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode===RIGHT_ARROW)
  {
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0});
  }
}


