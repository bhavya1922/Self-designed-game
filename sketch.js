var snake;
var food;
var game,snake;
var w,h,r;
r=20;



function setup(){
    var canvas = createCanvas(1000,500);
    w=floor(width/r)
    h=floor(height/r)
    //frameRate(10)
    snake= new Snake()
    foodLocation()
    
}

function draw(){
    background("lightblue");
    if(snake.eat(food)) {
        foodLocation()
        console.log("eating")
    }
    snake.update()
    snake.show()
    fill("red")
    rect(food.x,food.y,20,20)
    

    
    
}
function foodLocation() {
    var x,y;
    x=floor(random(20,980))
    y=floor(random(20,480))
    food=createVector(x,y)
    

}
function keyPressed() {
    if(keyCode===UP_ARROW) 
        snake.setDir(0,-1)
        
    
    else if(keyCode===DOWN_ARROW) 
        snake.setDir(0,1)
        else if (keyCode===RIGHT_ARROW) 
        snake.setDir(1,0)
        else if(keyCode===LEFT_ARROW) 
        snake.setDir(-1,0)
    //else if(key===' ') {
    //    snake.grow()
    //}
}