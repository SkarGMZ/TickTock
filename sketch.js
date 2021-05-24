var hr
var min
var sec
var hrangle
var secangle
var minangle

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
  
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-090)
  hr=hour()
  min=minute()
  sec=second()  
  secangle=map(sec, 0, 60, 0, 360)
  minangle=map(min, 0, 60, 0, 360)
  hrangle=map(hr%12, 0, 12, 0, 360)
  //join the second hand
  push()
  rotate(secangle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()
  //join the minute hand
  push()
  rotate(minangle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop()
  //join the hour hand
  push()
  rotate(hrangle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()

  //draw the arc
  strokeWeight(10)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,secangle)
  stroke(0,255,0)
  arc(0,0,280,280,0,minangle)
  stroke(0,0,255)
  arc(0,0,260,260,0,hrangle)
  



























































  drawSprites()
}