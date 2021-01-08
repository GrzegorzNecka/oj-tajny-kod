import "./style.css";

const display = document.querySelector(".display");
const keyboard = document.querySelector(".keyboard");
//classes
const btnKey = document.querySelector(".keyboard__button").className;
const saveKey = document.querySelector(".keyboard__button--save").className;
const resetKey = document.querySelector(".keyboard__button--reset").className;

let buffor = [];

keyboard.addEventListener("click", ({ target: { className, dataset } }) => {
  switch (className) {
    case saveKey:
      display.textContent = buffor.join("");
      break;
    case resetKey:
      buffor = [];
      display.textContent = "";
      break;
    case btnKey:
      buffor.push(dataset.value);
      break;
    default:
  }
});
