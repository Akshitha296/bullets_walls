var thickness, wall;
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);

  thickness=random(22,83);

  speed=random(223,321);

  weight=random(30,52);

  wall = createSprite(1200,200,thickness,200);
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.width/2 + wall.width/2)){
      bullet.velocityX = 0;
      var deformation=0.5 * weight * speed * speed/22509;

      if (deformation>180){
        bullet.shapeColor = color(255,0,0);
      }

      if (deformation<180 && deformation>100){
        bullet.shapeColor = color(230,230,0);
      }

      if (deformation<100){
        bullet.shapeColor = color(0,255,0);
      }
      
  }

  drawSprites();

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight* speed* speed/(thickness* thickness* thickness);
  }

    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
}

function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}