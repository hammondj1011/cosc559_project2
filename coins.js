class Coins {
  constructor(x, y, r){
    this.x = width
    this.y = height-130
    this.r = 50
    
  }
  
  show(){
    // ellipse(this.x, this.y, this.r, this.r)
    // imageMode(CENTER);
    image(coinImg, this.x - 33,this.y - 32, this.r, this.r);
    // ellipse(this.x, this.y, this.r, this.r)
  }
  
  move(){
    this.x -= 7; 
  }
  
  destroy(){
    this.x = width + 50;
  }
  
}