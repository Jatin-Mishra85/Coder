const elements = document.querySelectorAll(".elements");

elements.forEach((element) => {
  const img = element.querySelector("img");

  element.addEventListener("mousemove", (det) => {
    img.style.left = det.x + "px";
    // img.style.top = det.y + "px";
  });

  element.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });

  element.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
  });
});
