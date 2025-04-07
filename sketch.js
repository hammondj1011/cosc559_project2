let men;
let obstacle;
let trees;
let bImg;
let cImg1;
let buImg;
let dImg;
let sound;
let sound2;
let sound3;

let tree = [];
let obstacles = [];
let coins = [];
let start;
let gameState = 'START';
let gameOver = 'Game Over.'

function preload() {
  bImg = loadImage('assets/2.gif');
  buImg = loadImage('assets/brick.png');
  dImg = loadImage('assets/super_mario.gif');
  sound = loadSound('assets/jump.wav');
  marioJump = loadSound('assets/smb_jump-small.wav')
  sound1 = loadSound('assets/out1.wav');
  sound2 = loadSound('assets/out2.wav');
  endSound = loadSound('assets/smb_mariodie.wav');
  coinSound = loadSound('assets/coin.wav');
  coinImg = loadImage('assets/coin3.jpeg');
}



//start code
function setup() {
  score = 0;
  createCanvas(1021, 673);
  reset();
  // reset button. NOTE: spacebar also works as reset. 
  var button = createButton('reset');
  button.mousePressed(reset);
  
}




function draw(){
  gameFlow();
}


function gameFlow(){
  if (gameState == 'START'){
    startGame();
  }
  else if (gameState == 'PLAY'){
    playGame();       
  }
  
  else if (gameState == 'END'){
   endGame();    
  }
}

function reset(){
  gameState = 'START';
  background(bImg);
  men = new Men();
  
  push();
  fill(0);
  textSize(30);
  text('press space to PLAY', width/2, height/2);
  pop();
}

function startGame(){
  men.show();
  push();
  fill(0);
  textSize(30);
  text('press space to PLAY', width/2, height/2);
  pop();
    
  if (keyIsPressed && key == ' '){
    gameState = 'PLAY';
  } 
}


function playGame(){
  background(bImg);
  textSize(30);
  fill(255);
  text("Score: " + score, 60, 30);
  men.show();
  men.move();
  
  if (keyIsPressed && key == ' '){
    men.jump();
    marioJump.play();
    
  }
  
  
  if (random(1) < 0.01){
    obstacles.push(new Obstacle());
  }
   
  
  if (random(1) < 0.0005){
    tree.push(new Trees());
  }
  
    if (random(1) < 0.008){
    coins.push(new Coins());
  }
  
  for (let o of obstacles){
    o.show();
    o.move();
    
   if (men.hits(o)){
    //sound1.play();
    endSound.play();
    textSize(30);
    fill(0)
    strokeWeight(10);
    textAlign(CENTER, CENTER);
    text(gameOver,width/2, height/2); 
    gameState = 'END';   
   }
  }
  
    for (let c of coins){
    c.show();
    c.move();
       
   if (men.hits(c)){
    coinSound.play();
    score = score + 1;
    c.destroy(); 
    
   
   }
  }
}

function endGame(){    
  for (let o in obstacles){
    obstacles.pop(o);
  }
  
    for (let c in coins){
    coins.pop(c);
  }
  
  score = 0;
  
  //if (keyIsPressed && key == ' '){
   // reset();
 // }
}
