const emojiinput = document.querySelector(`#emoji`);
const numberinput = document.querySelector(`#number`);
const printbtn = document.querySelector(`.printbtn`);
const resetbtn = document.querySelector(`.reset`);
const printer = document.querySelector(`#printer`);

function createemoji() {
    let text = document.createElement("p");
    text.textContent = emojiinput.value.repeat(numberinput.value);
    printer.appendChild(text);
}
function removeemoji() {
    printer.innerHTML = ``;
}

printbtn.addEventListener(`click`, ()=>{
    createemoji();
    if(emojiinput.value === `` && numberinput.value === ``){
        alert(`Please Enter Emoji and Number`);
        // emojiinput.value = `😠😠 enter something first`;
    }
        
    emojiinput.value = ``;
    numberinput.value = ``;
});
resetbtn.addEventListener(`click`, ()=>{
    removeemoji();
    emojiinput.value = ``;
    numberinput.value = ``;
});