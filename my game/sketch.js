var hero,shootingHero,spider,enemy
var spiderani,enemyani,heroani,invisibleGround

function preload (){
  heroani = loadAnimation('walking hero/hero 001.PNG','walking hero/hero 002.PNG','walking hero/hero 003.PNG','walking hero/hero 004.PNG','walking hero/hero 005.PNG','walking hero/hero 006.PNG','walking hero/hero 007.PNG','walking hero/hero 008.PNG','walking hero/hero 009.PNG','walking hero/hero 010.PNG','walking hero/hero 011.PNG','walking hero/hero 012.PNG')
}
function setup(){
  createCanvas(displayWidth - 150, displayHeight-185);

  hero = createSprite (70,height-100,20,60);
  hero.addAnimation("heroani",heroani)
invisibleGround = createSprite(width/2,height-50,width,5)
invisibleGround.visible = false;
}
function draw(){
  background (180);
  if (keyDown("space")){
    hero.velocityY = - 10
  }

  hero.velocityY = hero.velocityY + 1
   hero.collide (invisibleGround)
  drawSprites()
}
