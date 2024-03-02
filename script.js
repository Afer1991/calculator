let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;
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
  return op(a, b);
}

function updateDisplay(num) {
  if(displayValue == 0) {
    displayText.innerText = num;
    displayValue = num;
  } else {
    displayText.innerText += num;
    displayValue = displayText.innerText;
  }
}