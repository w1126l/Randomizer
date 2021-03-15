
var backR = 100, backG = 150, backB = 200;
var smoothR;

var stars = [];

var buttonCol;

var flowerNum;

let flowerName = ['Aster', 'Bird of Paradise', 'Calla Lilly', 'Chrysanthemum', 'Daffodil', 'Daisy', 'Freesia', 'Gladiolus', 'Heather', ' Hydrangea', 'Iris', 'Lilac', 'Orchid', 'Peony', 'Rose', 'Stock', 'Sunflower', 'Tulip'];
let flowerDesc = ['Wisdom and Devotion', 'Joy and Paradise', 'Purity and Passion', 'Loyalty and Love', 'Rebirth', 'Innocence and Purity', 'Passion and Joy', 'Strength and Integrity', 'Admiration and Luck', 'Emotion and Understanding', 'Royalty and Faith', 'Tranquility and Passion', 'Admiration and Innocence', 'Romance and Prosperity', 'Love and Passion', 'Beauty and Happiness', 'Adoration and Loyalty', 'Love and Confidence'];

/*
function preload() {

  aster = loadImage();
  bird = loadImage();
  calla = loadImage();
  chrys = loadImage();
  daffo = loadImage();
  daisy = loadImage();
  free = loadImage();
  glad = loadImage();
  heath = loadImage();
  hydra = loadImage();
  iris = loadImage();
  lilac = loadImage();
  orch = loadImage();
  peony = loadImage();
  rose = loadImage();
  stock = loadImage();
  sun = loadImage();
  tulip = loadImage();

}
*/

function setup() {

  createCanvas(windowWidth, windowHeight);

  console.log(windowHeight/2);

  for (var i = 0; i < windowHeight/2; i++) {

		stars[i] = new Star();

  }
}

function draw() {

  let smoothR = map(mouseY, 0, height, 255, 0);

  backR = smoothR;

  background(backR, backG, backB);

  for (var i = 0; i < stars.length; i++) {

		stars[i].draw();

  }

  drawDate();
  drawLuckyFlower();

}

function mousePressed () {

  backR = random(100, 256);
  backG = random(100, 256);
  backB = random(100, 256);

  buttonCol = random(100, 256);

}

function drawDate() {

  let sec = second();
  let min = minute();
  let h = hour();

  let m = month();
  var mText;
  if (m == 1) {
    mText = 'January';
  } else if (m == 2) {
    mText = "February";
  } else if (m == 3) {
    mText = "March";
  } else if (m == 4) {
    mText = "April";
  } else if (m == 5) {
    mText = "May";
  } else if (m == 6) {
    mText = "June";
  } else if (m == 7) {
    mText = "July";
  } else if (m == 8) {
    mText = "August";
  } else if (m == 9) {
    mText = "September";
  } else if (m == 10) {
    mText = "October";
  } else if (m == 11) {
    mText = "November";
  } else {
    mText = "December";
  }

  let d = day();
  let y = year();

  var dateSentString = ('Today is: ');
  var dateString = (d + ' ' + mText + ', ' + y);
  var timeSentString = ('\nThe time is: ');
  var timeString = (h + ':' + min + ':' + sec);

  textAlign(CENTER);
  textFont('Courier New');
  textSize(20);
  text(dateSentString + dateString + timeSentString + timeString, width/2, height/4.5);

}

function drawLuckyFlower() {

  var flowerButton = createButton('Generate Lucky Flower!');
  flowerButton.style('font-size', '12px');
  flowerButton.style('background-color', buttonCol);
  flowerButton.size(200, 20);
  flowerButton.position(width/2 - (100), height/3.75);
  flowerButton.mousePressed(genFlower);

}

function genFlower() {

  flowerNum = random(0, flowerName.length);

  console.log('name ' + flowerName.length);
  console.log('desc ' + flowerDesc.length);
  console.log('rand ' + flowerNum);

  chosenFlower = flowerName[flowerNum];
  chosenFlowerD = flowerDesc[flowerNum];

  console.log('flower ' + chosenFlower);
  console.log('desc ' + chosenFlowerD);

  text(chosenFlower, 400, 400);

}
