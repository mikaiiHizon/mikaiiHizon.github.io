function openEnvelope() {
  document.querySelector(".envelope").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("bg-music").play();
}

// Floating hearts generator
const heartContainer = document.querySelector(".heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);