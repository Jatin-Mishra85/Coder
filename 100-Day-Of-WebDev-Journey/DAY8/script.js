const buttonActivation = document.querySelectorAll(`.Greenbutton`);
const buttonActivationSound = new Audio(`sounds/watch-active-sound.mp3`);
const Greencircle = document.querySelector(`.circle`);
const Dontdo = document.querySelector(`.Dontdo`);
const XLine = document.querySelectorAll(`.X-shape`);
const XShadow = document.querySelectorAll(`.X-shadow`);

// glowing the omnitrix
function watchActiveGlow() {
  Greencircle.style.backgroundColor = `#00FF00`;
  Greencircle.style.boxShadow = `0px 0px 200px 30px #00ff00`;
}
// active omnitrix
buttonActivation.forEach((button) => {
  button.addEventListener(`click`, () => {
    buttonActivationSound.currentTime = 0; // reset the audio to the beginning
    buttonActivationSound.play();
    watchActiveGlow();
    setTimeout(() => {
      Greencircle.style.backgroundColor = `#6cbf30`;
      Greencircle.style.boxShadow = `none`; // remove the glow after 800ms
    }, 800); // change the color back to white after 500ms
  });
});
