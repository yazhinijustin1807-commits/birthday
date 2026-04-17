/* ❤️💙 HEARTS */
function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");

    const colors = ["red"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    heart.classList.add("heart", randomColor);

    heart.style.left = Math.random() * 100 + "vw";

    let size = Math.random() * 20 + 15;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 300);
}

/* 📸 SLIDESHOW */
let image = [
  "image/image1.jpeg",
  "image/image2.jpeg",
  "image/image3.jpeg",
  "image/image4.jpeg",
  "image/image5.jpeg"
];

let index = 0;

function changeImage() {
  const slide = document.getElementById("slide");
  if (slide) {
    slide.src = image[index];
    index = (index + 1) % image.length;
  }
}

/* 🚀 RUN */
window.onload = function () {
  createHearts();

  setInterval(changeImage, 2000);
};