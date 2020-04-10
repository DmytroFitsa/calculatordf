//cufru
const display = document.querySelector(".display");
document
  .querySelectorAll(".numbers button")
  .forEach((button) => button.addEventListener("click", digitPressed));
function digitPressed(ev) {
  display.value += ev.target.innerText;
}
//operacii
document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));
function operPressed(ev) {
  display.value += ev.target.innerText;
}
//button =
document.querySelector(".eq").addEventListener("click", calculate);
function calculate() {
  display.value = eval(display.value);
}
//button clear
document.querySelector(".reset").addEventListener("click", clear);
function clear() {
  display.value = clear(display.value);
}
