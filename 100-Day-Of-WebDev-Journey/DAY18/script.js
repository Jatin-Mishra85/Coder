const cards = document.querySelectorAll(".swipeCard > div");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.style.zIndex = i === index ? 10 : 0;
    card.style.opacity = i === index ? 1 : 0;
    card.style.transition = "opacity 0.5s ease-in-out";
  });
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

showCard(current); // initialize

// 🔧 FIXED: Mouseenter GSAP Animation
let page2Card = document.querySelector(".p2card");

page2Card.addEventListener("click", () => {
    gsap.from(page2Card, {
    duration: 2,
    rotate: 60,
    ease: "power4.in",
  });
});
