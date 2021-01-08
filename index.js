import "./style.css";

const $ = (elem) =>  document.querySelector(elem)

const display = $(".display");
const keyboard = $(".keyboard");
//classes
const btnKey = $(".keyboard__button").className;
const saveKey = $(".keyboard__button--save").className;
const resetKey = $(".keyboard__button--reset").className;

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
