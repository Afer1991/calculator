let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;
const displayText = document.querySelector('#display');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(op, a, b) {
  return add(a, b);
}