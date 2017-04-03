var player; 
var playerImage;
var enemy; 
var enemyImage;
var isGameOver; 
 
 function preload() {
  playerImage = loadImage ("http://68.media.tumblr.com/4df2cf6ae254ff90018e5f50cb8d09d0/tumblr_inline_o33k2bfdfu1sm64oj_500.gif");
  enemyImage = loadImage  ("https://ivobrett.github.io/hackclubcode/dodge/images/png/laserRed.png");
 }
 
 
function gameOver() { 
  background(0); 
  textAlign(CENTER); 
  fill("white"); 
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
} 
function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}
 
 
function setup() { 
    isGameOver = false; 
    createCanvas(250, 250); 
player = createSprite(width/2, height-25, 0, 0);
player.addImage(playerImage);
enemy = createSprite(width/2, 0, 0, 0);
enemy.addImage(enemyImage);
} 
 
 
function draw() { 
    if (isGameOver) { 
        gameOver(); 
    } else { 
        if (enemy.overlap(player)) { 
            isGameOver = true; 
        }
        // ...the rest of the draw function 
        background(0, 0, 100); 
 
 
        if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) { 
          player.position.x = player.position.x + 1; 
        } 
 
 
        if (keyDown(LEFT_ARROW) && player.position.x > 25) { 
          player.position.x = player.position.x - 1; 
        } 
 
 
        enemy.position.y = enemy.position.y + 3; 
 
 
        if (enemy.position.y > height) { 
          enemy.position.y = 0; 
          enemy.position.x = random(5, width-5); 
        } 
 
 
        drawSprites();         
    } 
} 
 
