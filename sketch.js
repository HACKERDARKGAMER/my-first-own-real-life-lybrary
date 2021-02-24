var movingrect,fixedrect
var rec

function setup() {
  createCanvas(800,400);
fixedrect = createSprite(400, 200, 50, 100);
fixedrect.shapeColor = "black";

movingrect = createSprite(100,100,100,50);
movingrect.shapeColor = "black";
}

function draw() {
  background(255,255,255); 

movingrect.x = mouseX;
movingrect.y = mouseY;
if(isTouching(fixedrect,movingrect)){
fixedrect.shapeColor = "blue";
movingrect.shapeColor = "blue";
}
else{
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
}

  drawSprites();
}