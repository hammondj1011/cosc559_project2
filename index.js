class Men {
 constructor() {
   this.r = 70;
   this.x = this.r + 120;
   this.y = 673 - this.r;
   this.vy = 0;
   this.gravity = 0.85;
  
 } 
  
  jump() {
    if (this.y == 673 - this.r - 65){
       this.vy = -25;
    }
    else {
        this.vy = this.vy;
    }
   
  }  
  
  hits(obstacle){
     return collideRectCircle(this.x, this.y, this.r, this.r, obstacle.x, obstacle.y + 50, obstacle.r, obstacle.r);
    
  }
  
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, 673 - this.r - 65)
  }
  
  show() {
    image(dImg, this.x, this.y - 80, 80, 110)
  }
   
}