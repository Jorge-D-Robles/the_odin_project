let inputStr = "";
let input1;
let input2;
let op;
let res = 0;
let flag = false;
let done = false;
const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const digits = document.querySelectorAll(".digits");
const clearAll = document.querySelector(".allclear");
const backSpace = document.querySelector(".clear");

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  if (!inputStr.includes(".")) {
    inputStr += ".";
    userInput.textContent += ".";
  }
});

backSpace.addEventListener("click", () => {
  if (done) reset();
  if (userInput.textContent.slice(-1) != " ") {
    userInput.textContent = userInput.textContent.slice(0, -1);
    inputStr = inputStr.slice(0, -1);
  }
});

clearAll.addEventListener("click", () => {
  reset();
});
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (done) reset();

    if (userInput.textContent === "0") userInput.textContent = "";
    inputStr += digit.value;
    userInput.textContent += digit.value;
  });
});

// todo: add chaining of operations, make sure result is added properly to input. fix edge cases. then we are done

const operators = document.querySelectorAll(".operators");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (done) {
      done = false;
      flag = false;
      input1 = res;
      inputStr = res.toString(); // Update inputStr to res
      userInput.textContent = input1;
      result.textContent = "";
      op = "";
    }
    if (!op && !flag) {
      input1 = parseFloat(inputStr);
      inputStr = ""; // Reset inputStr to an empty string
      op = operator.value;
      userInput.textContent += ` ${op} `;
      flag = true;
    } else {
      let tmp = op;
      equalsFunction();
      op = tmp;
      done = false;
      flag = true;
      input1 = res;
      inputStr = res.toString(); // Update inputStr to res
      userInput.textContent = `${inputStr} ${op} `;
      result.textContent = "";
    }
  });
});

function equalsFunction() {
  input2 = parseFloat(inputStr);
  inputStr = "";
  res = calculate(input1, input2, op);
  op = "";
  flag = false;
  result.textContent = res;
  done = true;
}
const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsFunction);

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "x":
      return a * b;
    case "%":
      return a % b;
  }
}

function reset() {
  inputStr = "";
  userInput.textContent = "0";
  result.textContent = "";
  done = false;
  flag = false;
  res = 0;
  op = "";
}
