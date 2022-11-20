var fondo;
var bed;
var bedimg;
var choba;
var chobaimg;
function preload (){
fondo = loadImage("assets/fondo.png");
bedimg = loadImage("assets/bed.png")
chobaimg = loadImage("assets/choba.png")
}


function setup (){
bed = createSprite(1500,700,50,50);
bed.addAnimation("bed",bedimg);
bed.scale = 2;
choba = createSprite(1500,650,40,40);
choba.addAnimation("choba",chobaimg);
choba.scale = 0.3;
}


function draw (){
createCanvas ( displayWidth,displayHeight);
background(fondo);
drawSprites();
    
}