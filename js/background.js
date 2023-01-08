const images = [
  "paper1.jpeg",
  "paper2.jpg",
  "paper3.jpg",
  "paper4.jpg"
]

const randomImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img"); 
//create html element in js
// background.src =  `img/${randomImg}`;
//console.log(background);

// document.body.appendChild(background);
// going to add body in html

document.body.style.backgroundImage = `url(img/${randomImg})`;
// Photo by <a id="paper1" href="https://unsplash.com/es/@sjobjio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SJ Objio</a> on <a href="https://unsplash.com/photos/XFWiZTa2Ub0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a id="paper2" href="https://unsplash.com/@marjan_blan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marjan Blan | @marjanblan</a> on <a href="https://unsplash.com/photos/5Ft4NWTmeJE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a id="paper3" href="https://unsplash.com/fr/@olga_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olga Thelavart</a> on <a href="https://unsplash.com/photos/vS3idIiYxX0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  