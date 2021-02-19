var wall , car;
var speed , weight;

function setup() {
  createCanvas(800,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  car = createSprite(50,200, thickness, height/2);
  car.velocityX = speed;
  car.shapeColor = "black";

  wall = createSprite(1200 , 200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background("black");  
  var deformation = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thicknessOfWall*thicknessOfWall*thicknessOfWall ;
  
  if(wall.x - car.x <=car.width/2 + wall.width/2){
  car.velocityX = 0;  
  var deformation= 0.5 * weight * speed * speed/22500;
  
  if(deformation > 180){
  car.shapeColor = color(255 , 0 , 0);  
  }

  if (deformation < 180 && deformation >  100){
  car.shapeColor = color(230 ,230 ,0);  
  }

  if(deformation < 100){
  car.shapeColor = color(0 , 255 , 0);  
  }
} 

function hasCollided();

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