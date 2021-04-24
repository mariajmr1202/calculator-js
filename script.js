const display = document.getElementById("calculator-display");
const keys = document.getElementById("calculator-keys");
let operationStatus = false;
let num1, typeOperation;
display.textContent = "0";

const writeDisplay = (num) => {
  console.log(num);
  if (display.textContent === "0" || operationStatus === true) {
    display.textContent = num;
  } else if (num === "." && !display.textContent.includes(".")) {
    display.textContent += num;
  } else if (num !== ".") {
    display.textContent += num;
  }

  operationStatus = false;
};

const getOperation = (element, operation) => {
  operationStatus = true;
  num1 = Number(display.textContent);
  typeOperation = operation;
  display.textContent = element.textContent;
  return { num1, typeOperation };
};

const getResult = () => {
  const num2 = Number(display.textContent);
  let result;
  switch (typeOperation) {
    case "add":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }

  result === Infinity
    ? (display.textContent = "Error")
    : (display.textContent = result);
};

const runOperation = (operation) => {
  operation === "clear" ? (display.textContent = "0") : getResult();
  operationStatus = true;
};

const calculator = () => {
  if (!keys) return;
  keys.addEventListener("click", (e) => {
    const t = e.target;
    const d = t.dataset;

    if (d.number) {
      writeDisplay(d.number);
    }

    if (d.math) {
      getOperation(t, d.math);
    }

    if (d.operation) {
      runOperation(d.operation);
    }
  });
};

calculator();
