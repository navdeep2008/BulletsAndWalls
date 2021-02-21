var wall , bullet;
var speed , weight;

function setup() {
  createCanvas(800,400);

  bullet = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200, thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "black";

  wall = createSprite(1200 , 200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background("black");  
  var deformation = 0.5*bullet*bulletSpeed*bulletSpeed/thicknessOfWall*thicknessOfWall*thicknessOfWall;

  if(hasCollided(bullet , wall))
{
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);  
}

if(damage > 10){
wall.shapeColor = color(255,0,0);;  
}

if (damage < 10){
wall.shapeColor = color(0.,2550); 
}

  drawSprites();
}

function hasCollided(bullet , wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
  return true; 
}
  return false;
}