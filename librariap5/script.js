// function setup() {
//     background(255)
// }

// function draw(){
// background(255)
//  text("X" + mouseX,0, height/4)
//  text("Y" + mouseY,0, height/2)
// }

// function draw() {
// if(mouseIsPressed){
//     console.log("Mouse")
// }
// }


// function draw(){
//     background(255)
//     fill(0)

//     if(mouseIsPressed === false){
//         ellipse(50,50,50,50)
//     }  else{
//         rect(25,25,50,50)
//     }
// }


// let vlera = 0

// function draw(){
//     fill(vlera)
//     rect(25,25,50,50)

//     function mouseIsPressed(){
//         if(vlera === 0){
//             vlera = 255
//         } else {
//             vlera = 0
//         }
//     }
// }


////----------- Paint progress
// let brushSize = 20;
// let brushColor = "black"

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     noFill();
//     stroke(brushColor);
//     ellipse(mouseX, mouseY, brushSize, brushSize);

// }


// function mousePressed() {
//     fill(brushColor);
//     noStroke();
//     ellipse(mouseX, mouseY, brushSize, brushSize);
// }

// function mouseDragged() {
//     fill(brushColor);
//     noStroke();
//     ellipse(mouseX, mouseY, brushSize, brushSize);
// }

function preload(){
  img = loadImage("")
}


function setup() {
    createCanvas(400,400)
}

function draw(){
    background(155)
}
