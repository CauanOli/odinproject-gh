function add(x,y) {
    return x + y;
};

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(x,y,operator) {
    switch (operator) {
        case "+":
            return add(x,y);
            break;
        case "-":
            return subtract(x,y);
            break;
        case "*":
            return multiply(x,y);
            break;
        case "/":
            return divide(x,y);
            break;
        default:
            return "ERR";
    };
}

function clearDisplay() {
    display.textContent = "";
}

// Variables used in calculating the total
let total = 0;
let firstNumber;
let secondNumber;
let operator;

// Selecting the elements of the document
const display = document.querySelector('.display__p');
const numberButton = document.querySelectorAll('button.digit');
const clearButton = document.querySelector('button.clear');
const backButton = document.querySelector('button.backspace');
const equalButton = document.querySelector('button.equals');
const dot = document.querySelector('.dot');
const calcOperator = document.querySelectorAll('button.calc');

// Event listeners for functional buttons(=, ., C, B...)
clearButton.addEventListener('click', () => {
    clearDisplay();
});

backButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
});

equalButton.addEventListener('click', () => {
    if (firstNumber && display.textContent != total && display.textContent != "") {
        secondNumber = display.textContent;
        total = operate(firstNumber, secondNumber, operator);
        firstNumber = 0;
        secondNumber = 0;
    } else {
        total = display.textContent;
    }
    display.textContent = total;
});

dot.addEventListener('click', () => {
    if(display.textContent.indexOf(".") == -1 && display.textContent != "" && display.textContent.length <= 8) {
        display.textContent += ".";
    }
});

// Event listener for number buttons
numberButton.forEach(element => {
    element.addEventListener('click', () => {
        if (display.textContent == total) display.textContent = "";
        if (display.textContent.length <= 9) {
            display.textContent += element.textContent;
        }
    });
});

// Event listener for math operators(+, -, *...)
calcOperator.forEach(element => {
    element.addEventListener('click', () => {
        if (!firstNumber) {
            firstNumber = Number(display.textContent);
            operator = element.textContent;
            clearDisplay();
        };
    });
});