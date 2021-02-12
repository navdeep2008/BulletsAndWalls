var wall , car;
var speed , weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "black";

  wall = createSprite(600,200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background("black");  
  var deformation = 0.5*weight*speed*speed/22500;
  
  if(wall.x - car.x <=car.width/2 + wall.width/2){
  car.velocityX = 0;  
  var deformation= 0.5 * weight * speed * speed/22500;
  
  if(deformation > 180){
  car.shapeColor = color(255 , 0 , 0);  
  }

  if (deformation = 180 && deformation>100){
  car.shapeColor = color(230 ,230 ,0);  
  }

  if(deformation < 100){
  car.shapeColor = color(0 , 255 , 0);  
  }
} 
  drawSprites();
}