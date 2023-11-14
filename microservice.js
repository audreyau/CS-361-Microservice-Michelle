function getRandomImage() {
  fetch('http://localhost:2000/getRandomImage')
    .then(response => response.json())
    .then(data => {
      const randomImagePath = data.imagePath;
      document.getElementById('randomizedImage').src = randomImagePath;
    })
    .catch(error => {
      console.error(error);
    });
}