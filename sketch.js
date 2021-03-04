var wall , bullet;
var speed , weight;
var thickness;

function setup() {
  createCanvas(800,400);

  bulletSpeed = random(223,321);
  bulletWeight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 40, 40);
  bullet.velocityX = bulletSpeed;
  bullet.shapeColor = "white";

  wall = createSprite(600 , 200, thickness,height/2);
  wall.shapeColor = "white";   
}

function draw() {
  background("black"); 

  if(hasCollided(bullet , wall))
{
bullet.velocityX = 0;
var damage =  0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);

if(damage > 10){
wall.shapeColor = color(255,0,0);;  
}

if (damage < 10){
wall.shapeColor = color(0,255,0); 
}
}
  drawSprites();
}

function hasCollided(lbullet , lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
  return true; 
}
  return false;
}