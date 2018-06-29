/// Global Variables
var p5Canvas;
var myName;
var rectX;
var rectY;


// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Amara");

    
  }

function draw() {
  background(0, 255, 0);
      drawCircle () ;
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);  
    drawCirclething () ;
   
}
                    

function drawCircle() {
    fill("orange");
    ellipse(56, 46, 55, 55);
}
function variableEllipse(x, y, px, py) {
    var speed = abs(x-px) + 60 * abs(y-py);
    stroke(speed); 
    fill("orange");
    ellipse(x, y, speed, speed);
        
}

 

function drawCirclething () {
     fill('#fae');
    ellipse(100, 100, 85, 85);
}




