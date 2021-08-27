var box 

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background("yellow");

  if (keyIsDown(RIGHT_ARROW)) 
  {   background("red");
    box.position.x = box.position.x +5;
  }
  
    if (keyIsDown(LEFT_ARROW)) 
  {     background("black");
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {     background("green");
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {   background("blue")
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




