
var canvas
var stateofNumber
var stateofNumbertwo
var stateofNumberthree
var stateofNumberfour
var stateofNumberfive 
var stateofNumbersix
var stateofNumberseven
var stateofNumbereight
var stateofNumbernine
var stateofNumberas
var stateofNumberhash
var stateofNumberzero
var keypad

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
  stateofNumber = 0 
  stateofNumbertwo = 0 
  stateofNumberthree = 0 
  stateofNumberfour
  stateofNumberfive = 0 
  stateofNumbersix = 0 
  stateofNumberseven = 0 
  stateofNumbereight = 0 
  stateofNumberas = 0 
  stateofNumberhash = 0 
  stateofNumberzero = 0 

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
}

function keypad()
{
  image(one,243,264,90,75);
  image(two,150,415,90,75);
  image(three,332,187,90,75);
  image(four,149,263,90,75);
  image(five,241,415,90,75);
  image(six,332,263,90,75);
  image(seven,241,187,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,150,187,90,75);
  image(as,150,339,90,75);
  image(hash,332,415,90,75);

if (stateofNumber == 1) 
{ 
  image(one,151,188,90,75);
  image(two,150,415,90,75);
  image(three,332,187,90,75);
  image(four,150,339,90,75);
  image(five,242,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,263,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(as,241,187,90,75);
  image(hash,332,415,90,75);
} 
  

if (stateofNumbertwo == 1) 
{ 
  image(hash,151,188,90,75);
  image(three,240.5,188,90,75);
  image(one,332,188,90,75);
  image(four,150,263,90,75);
  image(two,243,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(eight,241,339,90,75);
  image(five,331,339,90,75);
  image(zero,241,415,90,75);
  image(as,150,415,90,75);
  image(nine,332,415,90,75);
} 

if (stateofNumberthree == 1) 
{
  image(one,151,188,90,75);
  image(four,240.5,188,90,75);
  image(three,332,188,90,75);
  image(six,150,263,90,75);
  image(five,241,263,90,75);
  image(two,332,263,90,75);
  image(as,150,339,90,75);
  image(seven,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(eight,150,415,90,75);
  image(hash,332,415,90,75);
} 

if (stateofNumberfour == 1) 
{ 
  image(hash,151,188,90,75);
  image(two,240.5,188,90,75);
  image(one,332,188,90,75);
  image(zero,150,263,90,75);
  image(four,241,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(eight,241,339,90,75);
  image(five,332,339,90,75);
  image(three,241,415,90,75);
  image(as,150,415,90,75);
  image(nine,332,415,90,75);
} 
  
if (stateofNumberfive == 1) 
{ 
  image(one,334,188,90,75);
  image(two,240.5,188,90,75);
  image(three,149,188,90,75);
  image(four,149,263,90,75);
  image(five,242,263,90,75);
  image(six,241,415,90,75);
  image(seven,149,339,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,332,415,90,75);
  image(as,150,415,90,75);
  image(hash,333,263,90,75);
} 

if (stateofNumbersix == 1) 
{ 
  image(as,151,188,90,75);
  image(nine,240.5,188,90,75);
  image(hash,332,188,90,75);
  image(four,150,263,90,75);
  image(five,241,263,90,75);
  image(one,332,263,90,75);
  image(three,150,339,90,75);
  image(eight,241,339,90,75);
  image(seven,332,339,90,75);
  image(zero,241,415,90,75);
  image(two,150,415,90,75);
  image(six,332,415,90,75);
} 
  
if (stateofNumberseven == 1) 
{ 
  image(one,151,188,90,75);
  image(zero,240.5,188,90,75);
  image(three,332,188,90,75);
  image(four,150,263,90,75);
  image(five,241,263,90,75);
  image(hash,332,263,90,75);
  image(seven,150,339,90,75);
  image(two,241,339,90,75);
  image(nine,332,339,90,75);
  image(six,241,415,90,75);
  image(as,150,415,90,75);
  image(eight,332,415,90,75);
} 
  
if (stateofNumbereight == 1) 
{ 
  image(five,151,188,90,75);
  image(two,240.5,188,90,75);
  image(three,332,188,90,75);
  image(four,150,263,90,75);
  image(one,241,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(as,150,415,90,75);
  image(hash,332,415,90,75);
} 
  
if (stateofNumbernine == 1) 
{ 
  image(seven,151,188,90,75);
  image(two,240.5,188,90,75);
  image(six,332,188,90,75);
  image(four,150,263,90,75);
  image(one,241,263,90,75);
  image(as,332,263,90,75);
  image(five,150,339,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(three,150,415,90,75);
  image(hash,332,415,90,75);
} 

if (stateofNumberas == 1) 
{ 
  image(eight,151,188,90,75);
  image(five,240.5,188,90,75);
  image(three,332,188,90,75);
  image(hash,150,263,90,75);
  image(one,241,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(four,241,339,90,75);
  image(nine,332,339,90,75);
  image(two,241,415,90,75);
  image(as,150,415,90,75);
  image(zero,332,415,90,75);
} 

if (stateofNumbertwo == 1) 
{ 
  image(five,151,188,90,75);
  image(two,240.5,188,90,75);
  image(three,332,188,90,75);
  image(four,150,263,90,75);
  image(one,241,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(as,150,415,90,75);
  image(hash,332,415,90,75);
} 
  
if (stateofNumberzero == 1) // original 
{ 
  image(one,151,188,90,75);
  image(two,240.5,188,90,75);
  image(three,332,188,90,75);
  image(four,150,263,90,75);
  image(five,241,263,90,75);
  image(six,332,263,90,75);
  image(seven,150,339,90,75);
  image(eight,241,339,90,75);
  image(nine,332,339,90,75);
  image(zero,241,415,90,75);
  image(as,150,415,90,75);
  image(hash,332,415,90,75);
} 

  
// first button
  if (mouseX > 150 && mouseX < 240 && mouseY > 190 && mouseY < 265 && mouseIsPressed == true) 
  {
    stateofNumber = 1; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0;
  }

// second button 
  if (mouseX > 240 && mouseX < 330 && mouseY > 190 && mouseY < 265 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 1; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  } 

// third button 
  if (mouseX > 332 && mouseX < 422 && mouseY > 190 && mouseY < 265 && mouseIsPressed == true) 
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 1; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

//fourth button 
 if (mouseX > 150 && mouseX < 240 && mouseY > 264 && mouseY < 339 && mouseIsPressed == true )
 {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 1;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; }
// fifth button
 if (mouseX > 240 && mouseX < 330 && mouseY > 264 && mouseY < 339 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 1;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }
  
  //sixth button
  if (mouseX > 332 && mouseX < 422 && mouseY > 264 && mouseY < 339 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 1;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // seventh button 
  if (mouseX > 150 && mouseX < 240 && mouseY > 339 && mouseY < 414 && mouseIsPressed) 
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 1; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // eigth button 
  if (mouseX > 240 && mouseX < 330 && mouseY > 339 && mouseY < 414 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 1;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // ninth button 
  if (mouseX > 332 && mouseX < 422 && mouseY > 339 && mouseY < 414 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 1;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0;
  }

  //tenth button or as 
  if (mouseX > 150 && mouseX < 240 && mouseY > 415 && mouseY < 490 && mouseIsPressed)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 1;
    stateofNumberhash = 0;
  }

  //12th button 
  if (mouseX > 332 && mouseX < 422 && mouseY> 415 && mouseY < 490 && mouseIsPressed)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 1;
  }
// eleventh button or 0 
 if (mouseX > 240 && mouseX < 330 && mouseY > 415 && mouseY < 490 && mouseIsPressed == true)
    {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 1;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
    }
  
  
}

function labels()
{

}

function showResult()
{

}
