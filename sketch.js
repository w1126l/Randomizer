
var canvas;

var backR = 100, backG = 150, backB = 200;
var smoothR;

var stars = [];

var buttonCol;

var flowerNum, chosenFlower, chosenFlowerD;

var flowerName = ['Aster', 'Bird of Paradise', 'Calla Lilly', 'Chrysanthemum', 'Daffodil', 'Daisy', 'Freesia', 'Gladiolus', 'Heather', ' Hydrangea', 'Iris', 'Lilac', 'Orchid', 'Peony', 'Rose', 'Stock', 'Sunflower', 'Tulip'];
var flowerDesc = ['Wisdom and Devotion', 'Joy and Paradise', 'Purity and Passion', 'Loyalty and Love', 'Rebirth', 'Innocence and Purity', 'Passion and Joy', 'Strength and Integrity', 'Admiration and Luck', 'Emotion and Understanding', 'Royalty and Faith', 'Tranquility and Passion', 'Admiration and Innocence', 'Romance and Prosperity', 'Love and Passion', 'Beauty and Happiness', 'Adoration and Loyalty', 'Love and Confidence'];

var flowerPhoto = [];

function preload() {

  flowerPhoto[0] = loadImage('media/flowers/aster.png');
  flowerPhoto[1] = loadImage('media/flowers/bird-paradise.png');
  flowerPhoto[2] = loadImage('media/flowers/calla-lily.png');
  flowerPhoto[3] = loadImage('media/flowers/chrysanthemum.png');
  flowerPhoto[4] = loadImage('media/flowers/daffodil.png');
  flowerPhoto[5] = loadImage('media/flowers/daisy.png');
  flowerPhoto[6] = loadImage('media/flowers/freesia.png');
  flowerPhoto[7] = loadImage('media/flowers/gladiolus.png');
  flowerPhoto[8] = loadImage('media/flowers/heather.png');
  flowerPhoto[9] = loadImage('media/flowers/hydrangea.png');
  flowerPhoto[10] = loadImage('media/flowers/iris.png');
  flowerPhoto[11] = loadImage('media/flowers/lilac.png');
  flowerPhoto[12] = loadImage('media/flowers/orchid.png');
  flowerPhoto[13] = loadImage('media/flowers/peony.png');
  flowerPhoto[14] = loadImage('media/flowers/rose.png');
  flowerPhoto[15] = loadImage('media/flowers/stock.png');
  flowerPhoto[16] = loadImage('media/flowers/sunflower.png');
  flowerPhoto[17] = loadImage('media/flowers/tulip.png');

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0, 'fixed');
  canvas.style('z-index', '-100');

  frameRate(60);

  console.log(windowHeight/2);

  for (var i = 0; i < windowHeight/2; i++) {
		stars[i] = new Star();
  }

  genFlowerNum();

}

function draw() {

  drawBack();
  drawDate();
  drawLuckyFlower();
  genFlower();

}

function mousePressed () {

  backR = random(100, 256);
  backG = random(100, 256);
  backB = random(100, 256);

  buttonCol = random(100, 256);

}

function drawBack() {

  let smoothR = map(mouseY, 0, height, 255, 0);

  backR = smoothR;

  background(backR, backG, backB);

  for (var i = 0; i < stars.length; i++) {

		stars[i].draw();

  }
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
  textSize(25);
  text(dateSentString + dateString + timeSentString + timeString, width/2, height/4.5);

}

function drawLuckyFlower() {

  var flowerButton = createButton('Generate Lucky Flower!');
  flowerButton.style('display', 'inline-block');
  flowerButton.style('font-size', '15px');
  flowerButton.style('background-color', color(backR + 50, backG + 50, backB + 50));
  flowerButton.style('text-decoration', 'none');
  flowerButton.style('border-radius', '10px');
  flowerButton.style('border', 'none');
  flowerButton.style('font', 'Courier New');
  flowerButton.size(200, 20);
  flowerButton.position(width/2 - (100), height/3.75);
  flowerButton.mousePressed(genFlowerNum);

}

function genFlowerNum () {

  flowerNum = int(random(flowerName.length));

}

function genFlower() {

  console.log('flower ' + flowerName[flowerNum]);
  console.log('desc ' + flowerDesc[flowerNum]);

  imageMode(CENTER);
  image(flowerPhoto[flowerNum], width/2, height/2.25, 300, 300);

  textAlign(CENTER, CENTER);
  textFont('Courier New');
  textSize(25);
  text("Your lucky flower of the day is the " + flowerName[flowerNum] + "\nIt represents " + flowerDesc[flowerNum], width/2, height/1.65);

}
