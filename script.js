let firstNumber;
let secondNumber;
let operator;
let displayValue;
const displayText = document.querySelector('#display');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const button0 = document.querySelector('#zero');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiplier');
const divideButton = document.querySelector('#divisor');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

button1.onclick = function() {updateDisplay(1);}
button2.onclick = function() {updateDisplay(2);}
button3.onclick = function() {updateDisplay(3);}
button4.onclick = function() {updateDisplay(4);}
button5.onclick = function() {updateDisplay(5);}
button6.onclick = function() {updateDisplay(6);}
button7.onclick = function() {updateDisplay(7);}
button8.onclick = function() {updateDisplay(8);}
button9.onclick = function() {updateDisplay(9);}
button0.onclick = function() {updateDisplay(0);}
plusButton.onclick = function() {addSecondArgument(add);}
minusButton.onclick = function() {addSecondArgument(subtract);}
multiplyButton.onclick = function() {addSecondArgument(multiply);}
divideButton.onclick = function() {addSecondArgument(divide);}
equalButton.onclick = equal;
clearButton.onclick = clear;

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
  if(b != 0) {
    return a / b;
  }
  return "WTF!?!";
}

function operate(op, a, b) {
  return op(a, b);
}

function updateDisplay(num) {
  if(displayValue == undefined) {
    displayText.innerText = num;
    displayValue = num;
  } else {
    displayText.innerText += num;
    displayValue = displayText.innerText;
  }
}

function addSecondArgument(op) {
  if (operator == undefined && firstNumber == undefined) {
    firstNumber = displayValue;
    displayValue = undefined;
    operator = op;
  } else if ((operator == undefined && firstNumber != undefined)  || 
             (operator != undefined && firstNumber != undefined && displayValue == undefined)) {
    operator = op;
  } else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(displayValue);
    let result = operate(operator, firstNumber, secondNumber);
    displayValue = undefined;
    displayText.innerText = result;
    operator = op;
    firstNumber = result;
  }
}

function equal() {
  if (operator != undefined && displayValue != undefined) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(displayValue);
    let result = operate(operator, firstNumber, secondNumber);
    displayValue = undefined;
    displayText.innerText = result;
    operator = undefined;
    firstNumber = result;
    secondNumber = undefined;
  }  
}

function clear() {
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  displayValue = undefined;
  displayText.innerText = "";
}
