var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImg
var leaves
var leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  var select_sprite = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprite == 1){
      createApples();
    }
    else{
     createLeaves();
    }
  }
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350),40,10,10);
  apple.velocityY = 3;
  apple.addImage("apple",appleImg);
  apple.scale = 0.05

}

function createLeaves(){
leaves = createSprite(random(50, 350),40,10,10);
leaves.velocityY = 3;
leaves.addImage("leaves",leavesImg);
leaves.scale = 0.05
}