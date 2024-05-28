function setup() {
    createCanvas(600, 600);
    background("darkblue");
  }
  
  
  function draw() {
    
    stroke ("pink");
    fill ("purple");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 30, 30);
    }
  }