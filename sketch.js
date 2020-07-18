var dog,sadDog,happyDog,database;
var foodS,foodStock
var feed,addFood;

function preload(){
happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(400,500);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
   
  dog=createSprite(200,400,150,150);
  dog.addImage(happyDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function draw() {
 
  drawSprites();
}
//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

//update gameState
function update(state){
  database.ref('/').update({
    gameState:state
  })
}


