let firstNum = 0;
let secondNumb = 0;
let operator = null;
let bool = true; 

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (e) => {
  const el = e.target;
  if (el.tagName !== "BUTTON") return;
  const text = el.innerText;
  if (text === "C") {
    clearAll();
    return;
  }
  if (text === "=") {
    calculate();
    return;
  }
  if (el.className === "") {
    chooseOperator(el);
    display.innerText += text;
  } else {
    appendDigit(el);
    display.innerText += text;
  }
});

function appendDigit(el) {
  const val = Number(el.innerText);
  if (Number.isNaN(val)) return;
  if (bool) {
    firstNum = firstNum * 10 + val;
  } else {
    secondNumb = secondNumb * 10 + val;
  }
}

function chooseOperator(el) {
  operator = el.id;
  bool = false;
  secondNumb = 0;
}

function calculate() {
  let res;
  switch (operator) {
    case "divide":
      res = firstNum / secondNumb;
      break;
    case "multiply":
      res = firstNum * secondNumb;
      break;
    case "add":
      res = firstNum + secondNumb;
      break;
    case "subtract":
      res = firstNum - secondNumb;
      break;
    default:
      return;
  }
  display.innerText = res;
  firstNum = res;
  secondNumb = 0;
  bool = false;
  operator = null;
}

function clearAll() {
  firstNum = 0;
  secondNumb = 0;
  operator = null;
  bool = true;
  display.innerText = "";
}
