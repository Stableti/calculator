const pastValue = document.querySelector("[data-past-value]");
const currentValue = document.querySelector("[data-current-value]");
const allClear = document.querySelector("[data-all-clear]");
const erase = document.querySelector("[data-delete]");
const operators = Array.from(document.querySelectorAll("[data-operation]"));
const numbers = Array.from(document.querySelectorAll("[data-number]"));
const equals = document.querySelector("[data-equals]");

let operationClicked = false;
let currentOperand = "";
let pastOperand = "";
let currentOperation = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayPast();
    currentOperand += number.textContent;
    displayCurrent(currentOperand);
  });
});