let autoplay;

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel .item");
const totalItems = items.length;

let activeIndex = 1;
let lock = false; // debounce lock

const getPrevIndex = (index) => (index - 1 + totalItems) % totalItems;
const getNextIndex = (index) => (index + 1) % totalItems;

const changeSlider = () => {
    // Remove old classes from all items
    items.forEach(item => {
        item.classList.remove("active", "other_1", "other_2");

        // Reset animations
        const img = item.querySelector('.image img');
        const caption = item.querySelector('.image figcaption');

        img.style.animation = 'none';
        caption.style.animation = 'none';
        void item.offsetWidth; // Force reflow
        img.style.animation = '';
        caption.style.animation = '';
    });

    // Add updated classes to respective items
    items[activeIndex].classList.add("active");
    items[getPrevIndex(activeIndex)].classList.add("other_1");
    items[getNextIndex(activeIndex)].classList.add("other_2");

    // Reset autoplay
    clearInterval(autoplay);
    autoplay = setInterval(() => {
        next.click();
    }, 5000);
};

// Move to next slide
next.onclick = () => {
    if (lock) return;
    lock = true;

    carousel.classList.remove("prev");
    carousel.classList.add("next");

    activeIndex = getNextIndex(activeIndex);
    changeSlider();

    setTimeout(() => lock = false, 500); // prevent spam clicking
};

// Move to previous slide
prev.onclick = () => {
    if (lock) return;
    lock = true;

    carousel.classList.remove("next");
    carousel.classList.add("prev");

    activeIndex = getPrevIndex(activeIndex);
    changeSlider();

    setTimeout(() => lock = false, 500);
};

// Initialize slider on page load
changeSlider();

// Autoplay functionality
autoplay = setInterval(() => {
    next.click();
}, 5000);

