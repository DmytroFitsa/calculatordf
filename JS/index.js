//cufru
const display = document.querySelector(".display");
document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));
function digitPressed(ev) {
  display.value += ev.target.innerText;
}

//operacii
document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));
function operPressed(ev) {
    if ('+-*/'.includes(display.value[display.value.length - 1])) {
        display.value = display.value.slice(0, -1);
        display.value += ev.target.innerText;
    } else if (display.value[display.value.length - 1] == null) {
        display.value = null;
    } else {
        display.value += ev.target.innerText;
    }
}

//button =
document.querySelector(".eq").addEventListener("click", calculate);
function calculate() {
    if (display.value.indexOf('/0') !== -1) {
        display.value = 'DANGER! You divide by 0 :('
    } else {
        display.value = parseFloat(eval(display.value).toFixed(3));
    }
}

// //button clear
document.querySelector(".clear").addEventListener("click", clear);
function clear() {
  display.value = '';
}
