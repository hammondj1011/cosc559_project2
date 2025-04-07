class Obstacle {
  constructor(x, y, r){
    this.x = width
    this.y = height - 120
    this.r = 70
    
  }
  
  show(){
    // ellipse(this.x, this.y, this.r, this.r)
    // imageMode(CENTER);
    image(buImg, this.x - 33,this.y - 32, this.r, this.r);
    // ellipse(this.x, this.y, this.r, this.r)
  }
  
  move(){
    this.x -= 6;
  }
  
  destroy(){
    this.x = width + 50;
  }
  
}