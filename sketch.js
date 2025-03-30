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
let start;
let gameState = 'START';
let gameOver = 'GAME OVER'


function preload() {
  bImg = loadImage('assets/2.gif');
   buImg = loadImage('assets/brick.png');
  //dImg = loadImage('assets/d.gif');
  dImg = loadImage('assets/super_mario.gif');
  sound = loadSound('assets/jump.wav');
  sound1 = loadSound('assets/out1.wav');
  sound2 = loadSound('assets/out2.wav');
}



//start code
function setup() {
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
  fill();
  textSize(30);
  text('press SPACE to PLAY', width/2, height/2);
  pop();
}

function startGame(){
  men.show();
  push();
  fill(0);
  textSize(30);
  text('press SPACE to PLAY', width/2, height/2);
  pop();
    
  if (keyIsPressed && key == ' '){
    gameState = 'PLAY';
  } 
}


function playGame(){
  background(bImg);
  men.show();
  men.move();
  
  if (keyIsPressed && key == ' '){
    men.jump();
    sound.play();
  }
  
  
  if (random(1) < 0.01){
    obstacles.push(new Obstacle());
  }
   
  
  if (random(1) < 0.0005){
    tree.push(new Trees());
  }
  
  for (let o of obstacles){
    o.show();
    o.move();
    
   if (men.hits(o)){
    sound1.play();
    textSize(30);
    fill(0)
    strokeWeight(10);
    textAlign(CENTER, CENTER);
    text(gameOver,width/2, height/2); 
    gameState = 'END';   
   }
  }
}

function endGame(){    
  for (let o in obstacles){
    obstacles.pop(o);
  }
  
  if (keyIsPressed && key == ' '){
    reset();
  }
}