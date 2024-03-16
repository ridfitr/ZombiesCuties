class Zombie { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(5,5), random(-5,5)) 
    this.acceleration = createVector(0,0); 
  }
  
  
  display(){ 
    noStroke(); 
    fill("Pink");
    let r = random(25,50);
    ellipse(this.location.x, this.location.y, r, r);
    ellipse(this.location.x-15, this.location.y, r, r)
    ellipse(this.location.x, this.location.y-15, r, r)
   
  }
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 10
    dir.normalize(); 
    dir.mult(0.5); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > 600 ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = 600; 
    } 
   
    if ( this.location.y > 600) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = 600; 
    } 
  } 
}

let zombies = [];
let mouse;
function setup() {
  createCanvas(600,600);
  
  for (let i=0; i<40;i++){
    zombies[i] = new Zombie(random(600), random(600));   
  }
 
}

function draw() {
  background("Red");
 
      
  fill('Grey')
      ellipse(mouseX,mouseY,2,2);
  for (let i=0; i<10;i++){
      zombies[i].cekUjung(); 
      zombies[i].display(); 
      zombies[i].update();    
}
}
