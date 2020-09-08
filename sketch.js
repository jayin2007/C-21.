var wall,bullet;
var speed,weight;
var thickness


function setup() {
  createCanvas(1600,400);

speed = random(223,321)
weight = random(30,52)

thickness = random(22,83)

bullet = createSprite(50,200,20,20)
bullet.velocityX= speed;

wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80)



}

function draw() {
  background(0,0,0); 

  if (hascollided(bullet,wall))
  {
bullet.velocityX = 0;
var damage  = 0.5 * speed * speed/thickness(thickness*thickness*thickness);

if (damage>10)
{

wall.shapeColor = color(255,0,0)

}
if (damage<10)
{

wall.shapeColor = color (0,255,0)

}
  }

  
 
  drawSprites();
}

function hascollided (lbullet,lwall)
{

bulletRightEdge = bullet.x + bullet.width
wallLeftEdge =  wall.x

if(bulletRightEdge>=wallLeftEdge)
{
return  true
}
return  false
}







