const images = [
  "images/p1.png",
  "images/p2.png"
];

let index = 0;
const slider = document.getElementById("slider");

images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  slider.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground(); // Set initial image
setInterval(changeBackground, 5000); // Change every 5 seconds