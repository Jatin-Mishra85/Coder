const buttonActivation = document.querySelectorAll(`.Greenbutton`);
const buttonActivationSound = new Audio(`sounds/watch-active-sound.mp3`);
const alineready = new Audio(`sounds/omnitrix_song_2.mp3`);
const changeAlien = new Audio(`sounds/change.mp3`);
const Greencircle = document.querySelector(`.circle`);
const XLine = document.querySelectorAll(`.X-shape`);
const alineimgcontainer = document.querySelector(`.alines`);

const alinesimg = [
  "img/heateblast.png",
  "img/diamondhead.webp",
  "img/ghostfreek.png",
  "img/xlr8.png",
  "img/graymatter.png",
  "img/cananbolt.png",
  "img/ditto.png",
  "img/stingfly.png",
  "img/upgrade.png",
  "img/upjug.png",
  "img/waybig.webp",
  "img/wildmut.webp",
  "img/wildwines.png",
];

let circleClick = true;
let currentIndex = 0;
let isActivated = false;

// Alien Image Change (Only After First Click)
function alinesform() {
  alineimgcontainer.setAttribute("src", alinesimg[currentIndex]);

  if (!circleClick) {
    // 🔥 Sirf pehle click ke baad hi change sound chalega
    changeAlien.currentTime = 0;
    changeAlien.play();
  }

  currentIndex = (currentIndex + 1) % alinesimg.length;
}

// Omnitrix Glow Effect
function watchActiveGlow() {
  Greencircle.style.backgroundColor = `#00FF00`;
  Greencircle.style.boxShadow = `0px 0px 500px 50px #00ff00`;
}

// Omnitrix Activation with Sound & Alien Change
buttonActivation.forEach((button) => {
  button.addEventListener(`click`, () => {
    if (circleClick) {
      buttonActivationSound.currentTime = 0;
      buttonActivationSound.play();
      watchActiveGlow();
      crossLines();
      isActivated = true;
      circleClick = false;
    } else if (isActivated) {
      alinesform();
    }
  });
});

// Omnitrix Activation Animation
function crossLines() {
  XLine[0].style.left = `12%`;
  XLine[1].style.backgroundColor = `#6cbf30`;
  XLine[1].style.right = `12%`;
  Greencircle.style.backgroundColor = `gray`;
  alinesform();
}

// Omnitrix Deactivation and Alien Ready
Greencircle.addEventListener("click", () => {
  if (isActivated) {
    XLine[0].style.left = "-50%";
    XLine[1].style.right = "-50%";
    XLine[1].style.backgroundColor = "grey";
    Greencircle.style.backgroundColor = `#6cbf30`;
    alineimgcontainer.removeAttribute("src");

    alineready.currentTime = 0;
    alineready.play();

    alineready.onended = () => {
      resetOmnitrix();
    };

    greenglowoff();
    isActivated = false;
  }
});

// Omnitrix Glow Off
function greenglowoff() {
  Greencircle.style.boxShadow = `none`;
  Greencircle.style.backgroundColor = `#6cbf30`;
}

// Reset Omnitrix after Alien Ready
function resetOmnitrix() {
  circleClick = true; // 🔥 Reset first click behavior
  currentIndex = 0;
}
