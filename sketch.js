
var canvas
var stateofone
var enter
var lock 
var mute 
var lock2

function preload() 
{  
  //sound = loadSound('https://dl.dropboxusercontent.com/s/bziq4gufuakv7go/dolow.mp3');
  a = loadImage('https://dl.dropboxusercontent.com/s/zyh0yhga57p5o8z/Telephone-keypad.png?dl=0');
  b = loadImage('https://dl.dropboxusercontent.com/s/9aw3nyujtnsyza7/key.png?dl=0');
  
  one = loadImage('https://dl.dropboxusercontent.com/s/kwrqc8hjjpgt7co/1.png?dl=0');
  
  two = loadImage('https://dl.dropboxusercontent.com/s/g4okauublt89my0/2.png?dl=0');
  
  three = loadImage('https://dl.dropboxusercontent.com/s/rnb09n7t0f6xjwf/3.png?dl=0');
  
  four = loadImage('https://dl.dropboxusercontent.com/s/mmhrqqb0ecizey4/4.png?dl=0');
  
  five = loadImage('https://dl.dropboxusercontent.com/s/08m6fi30ubzywrs/5.png?dl=0');
  
  six = loadImage('https://dl.dropboxusercontent.com/s/czgwvehdvz5jlvy/6.png?dl=0');
  
  seven = loadImage('https://dl.dropboxusercontent.com/s/n5iue2nzlwsk2kn/7.png?dl=0');
  
  eight = loadImage('https://dl.dropboxusercontent.com/s/sz3osagazxithv7/8.png?dl=0');
  
  nine = loadImage('https://dl.dropboxusercontent.com/s/9owws1g906978xr/9.png?dl=0');
  
  zero = loadImage('https://dl.dropboxusercontent.com/s/0wyz72nc73z7z6d/0.png?dl=0');
  
  as = loadImage('https://dl.dropboxusercontent.com/s/1oe7jdgqor6pll9/a.png?dl=0');
  
  hash = loadImage('https://dl.dropboxusercontent.com/s/otfmc4xoix4v4m7/%23.png?dl=0');
  
}

function setup()
{
  //create a drawing service 500px wide, 500px tall
  createCanvas(650,500);


}

function draw()
{

  //draw circle in centre of sketch
  background(230,255,255);
  labels();
  keypad();
  showResult();
  fill(0,0,0);
  text("Mouse X "+mouseX,10,30);
  text("Mouse Y "+mouseY,10,50);
 stateofone = 0 


  
}

function keypad()
{
  
  //image(a,150,190,270,300);
  image(one,150,190,90,75);
  image(two,240,190,90,75);
  image(three,332,190,90,75);
  image(four,150,264,90,75);
  image(five,240,264,90,75);
  image(six,332,264,90,75);
  image(seven,150,339,90,75);
  image(eight,240,339,90,75);
  image(nine,332,339,90,75);
  
  
  
  //1
  if (mouseX > 150 && mouseX < 238 && mouseY > 190 && mouseY < 260 && mouseIsPressed == true)
  {
    stroke(255,255,255); 
    fill(255,255,255);
    rect(150,190,90,75);
  }

  //2
  if (mouseX > 240 && mouseX < 327 && mouseY > 190 && mouseY < 260 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(240,190,90,75);
  }
  
  //3
  if (mouseX > 332 && mouseX < 418 && mouseY > 190 && mouseY < 260 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(332,190,90,75);
  }
  
  //4
  if (mouseX > 150 && mouseX < 238 && mouseY > 264 && mouseY < 334 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(150,264,90,75);
  }
  
  //5
  if (mouseX > 240 && mouseX < 327 && mouseY > 264 && mouseY < 334 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(240,264,90,75);
  }
  
  //6
  if (mouseX > 332 && mouseX < 418 && mouseY > 264 && mouseY < 334 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(332,264,90,75);
  }
  
  //7
  if (mouseX > 150 && mouseX < 238 && mouseY > 339 && mouseY < 412 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(150,339,90,75);
  }

  //8
  if (mouseX > 240 && mouseX < 327 && mouseY > 339 && mouseY < 412 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(240,339,90,75);
  }

  //9
  if (mouseX > 332 && mouseX < 418 && mouseY > 339 && mouseY < 412 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(332,339,90,75);
  }

//0
  if (mouseX > 240 && mouseX < 327 && mouseY > 415 && mouseY < 488 && mouseIsPressed == true)
  {
    stroke(255,255,255);
    fill(255,255,255);
    rect(240,415,90,75);
  }

if (stateofone == 1) 
{ 
  image(one,332,342,90,73);
} 
  
  if (mouseX > 332 && mouseX < 418 && mouseY > 339 && mouseY < 412 && mouseIsPressed == true && lock == false ) 
  
  {
    stateofone = 1 
  }
  
}

function labels()
{

}

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}

function showResult()
{

}
