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

function displayCurrent(current) {
  currentValue.textContent = current;
}

function displayPast() {
  if (operationClicked) {
    pastOperand = currentValue.textContent;
    pastValue.textContent = pastOperand;
    pastOperand = currentValue.textContent.substring(
      0,
      currentOperand.length - 0
    );
    currentOperand = "";
    currentValue.textContent = `${currentOperand} ${currentOperation}`;
    operationClicked = false;
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperation = operator.textContent;
    currentValue.textContent = `${currentOperand} ${currentOperation}`;
    operationClicked = true;
  });
});

allClear.addEventListener("click", () => {
  currentOperand = "";
  pastOperand = "";
  currentValue.innerHTML = currentOperand;
  pastValue.innerHTML = pastOperand;
});

erase.addEventListener("click", () => {
  currentOperand = currentOperand.substring(0, currentOperand.length - 1);
  currentValue.textContent = currentOperand;
});

equals.addEventListener("click", () => {});