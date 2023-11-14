const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 2000;

let currentImage = './images/pochacco.png';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Image Microservice!');
});

app.get('/getRandomImage', (req, res) => {
  const randomImage = getRandomImage();
  res.json({ imagePath: randomImage });
});
  
function getRandomImage() {
  const imageArray = [
    'aggretsuko.png',
    'badtzmaru.png',
    'badtzmaru2.png',
    'chococat.png',
    'cinnamoroll.png',
    'cinnamoroll2.png',
    'cogimyun.png',
    'daniel.png',
    'gudetama.png',
    'gudetama2.png',
    'hangyodon.png',
    'hellokitty.png',
    'hellokitty2.png',
    'keroppi.png',
    'kuromi.png',
    'kuromi2.png',
    'littletwinstars.png',
    'mymelody.png',
    'mymelody2.png',
    'piano.png',
    'piano2.png',
    'pochacco.png',
    'pochacco2.png',
    'pompompurin.png',
    'tuxedosam.png',
  ];
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return `./images/${imageArray[randomIndex]}`;
}

function writeImagePathToFile(imagePath) {
  fs.writeFileSync('imagePath.txt', imagePath, 'utf-8');
}

app.listen(port, () => {
  console.log(`Image microservice listening at http://localhost:${port}`);
});
