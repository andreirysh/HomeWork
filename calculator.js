let currentNumber = '0';
let operator = '';
let numInMemory = 0;
let divisionByZero = false;

const displayField = document.querySelector('.display');
const clearButton = document.querySelector('.btn-clear');

clearButton.addEventListener('click', function() {
    currentNumber = '0';
    operator = '';
    numInMemory = 0;
    divisionByZero = false;
    updateDisplay();
});


function updateDisplay() {
    if (divisionByZero) {
        displayField.value = 'На ноль делить нельзя!';
    } else {
        displayField.value = parseFloat(currentNumber).toString();
    }
}

function addNumber(num) {
    if (currentNumber === '0' || currentNumber === '-0' || divisionByZero) {
        currentNumber = num.toString();
        divisionByZero = false;
    } else {
        currentNumber += num.toString();
    }

    updateDisplay();
}

function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
}

function changeSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
}

function operate(op) {
    calculate();
    operator = op;
    numInMemory = parseFloat(currentNumber);
    currentNumber = '0';
}

function clearDisplay() {
    currentNumber = '0';
    operator = '';
    numInMemory = 0;
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);

    if (currentNumber === '') {
        currentNumber = '0';
    }

    updateDisplay();
}

function calculate() {
    if (operator && numInMemory !== 0) {
        switch (operator) {
            case '*':
                currentNumber = (numInMemory * parseFloat(currentNumber)).toString().slice(0, 10);
                break;
            case '/':

                if (parseFloat(currentNumber) === 0) {
                    divisionByZero = true;
                } else {
                    currentNumber = (numInMemory / parseFloat(currentNumber)).toString().slice(0, 10);
                }

                break;
            case '+':
                currentNumber = (numInMemory + parseFloat(currentNumber)).toString().slice(0, 10);
                break;
            case '-':
                currentNumber = (numInMemory - parseFloat(currentNumber)).toString().slice(0, 10);
                break;
        }

        operator = '';
        numInMemory = 0;
        updateDisplay();
    }
}

updateDisplay();
