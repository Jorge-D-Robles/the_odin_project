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

// todo: add chaining of operations, make sure result is added properly to input. fix edge cases. then we are done. currently chaining look fine
//visually but logic is messed up somewhere. maybe something is happening
// cause it's a str and it's diong weird stuff. try parsing int

const operators = document.querySelectorAll(".operators");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (done) {
      // If a calculation was just completed, start fresh with the result
      done = false;
      flag = false;
      input1 = res;
      inputStr = ""; // Start fresh for new input
      userInput.textContent = input1 + " " + operator.value + " ";
      op = operator.value;
    } else if (!op && !flag) {
      // First operation in a sequence
      input1 = parseFloat(inputStr);
      inputStr = ""; // Clear inputStr for next input
      op = operator.value;
      userInput.textContent += ` ${op} `;
      flag = true;
    } else {
      // Chaining operations
      if (inputStr !== "" && input1 !== undefined) {
        input2 = parseFloat(inputStr);
        res = calculate(input1, input2, op);
        input1 = res; // Update input1 to the latest result
        inputStr = ""; // Clear inputStr for next input
        result.textContent = res;
      }
      op = operator.value;
      userInput.textContent = (input1 !== undefined ? input1 : 0) + " " + op + " ";
    }
  });
});

const screen = document.querySelector('.screen');
function equalsFunction() {
  input2 = parseFloat(inputStr);
  inputStr = "";
  if (op != "/" || input2 != 0) {
    res = calculate(input1, input2, op);
  }
  else {
    res = "You can't divide by 0 idiot.";
    userInput.textContent = res; // Display the error message
    result.textContent = "Imagine failing 5th grade math????"
    screen.style.backgroundColor = "red";
    setTimeout(() => {
      screen.style.backgroundColor = "yellow";
      setTimeout(() => {
        screen.style.backgroundColor = "red";
        setTimeout(() => {
          reset(); // Delay reset by 2000 milliseconds (2 seconds)
          screen.style.backgroundColor = "white";
        }, 700);
      }, 700);
    }, 700);
    return;
  }
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
