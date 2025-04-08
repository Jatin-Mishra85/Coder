const Main_div = document.querySelector(`main`);
const cursor = document.querySelector(`.cursor`);

Main_div.addEventListener(`mousemove`, (e) => {
    cursor.style.left = e.x + `px`;
    cursor.style.top = e.y + `px`;
});