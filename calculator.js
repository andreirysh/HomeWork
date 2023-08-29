class Calculator {
    constructor(displayField) {
        this.currentNumber = '0';
        this.operator = '';
        this.numInMemory = 0;
        this.divisionByZero = false;
        this.displayField = displayField;
    }

    updateDisplay() {
        if (this.divisionByZero) {
            this.displayField.value = 'На ноль делить нельзя!';
        } else {
            this.displayField.value = parseFloat(this.currentNumber).toString();
        }
    }

    addNumber(num) {
        if (this.currentNumber === '0' || this.currentNumber === '-0' || this.divisionByZero) {
            this.currentNumber = num.toString();
            this.divisionByZero = false;
        } else {
            this.currentNumber += num.toString();
        }

        this.updateDisplay();
    }

    addDecimal() {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
            this.updateDisplay();
        }
    }

    changeSign() {
        this.currentNumber = (parseFloat(this.currentNumber) * -1).toString();
        this.updateDisplay();
    }

    operate(op) {
        this.calculate();
        this.operator = op;
        this.numInMemory = parseFloat(this.currentNumber);
        this.currentNumber = '0';
    }

    clearDisplay() {
        this.currentNumber = '0';
        this.operator = '';
        this.numInMemory = 0;
        this.divisionByZero = false;
        this.updateDisplay();
    }

    backspace() {
        this.currentNumber = this.currentNumber.slice(0, -1);

        if (this.currentNumber === '') {
            this.currentNumber = '0';
        }

        this.updateDisplay();
    }

    calculate() {
        if (this.operator && this.numInMemory !== 0) {
            switch (this.operator) {
                case '*':
                    this.currentNumber = (this.numInMemory * parseFloat(this.currentNumber)).toString().slice(0, 10);
                    break;
                case '/':
                    if (parseFloat(this.currentNumber) === 0) {
                        this.divisionByZero = true;
                    } else {
                        this.currentNumber = (this.numInMemory / parseFloat(this.currentNumber)).toString().slice(0, 10);
                    }
                    break;
                case '+':
                    this.currentNumber = (this.numInMemory + parseFloat(this.currentNumber)).toString().slice(0, 10);
                    break;
                case '-':
                    this.currentNumber = (this.numInMemory - parseFloat(this.currentNumber)).toString().slice(0, 10);
                    break;
            }

            this.operator = '';
            this.numInMemory = 0;
            this.updateDisplay();
        }
    }
}

const displayField = document.querySelector('.display');
const calculator = new Calculator(displayField);

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        calculator.addNumber(parseInt(key));
    } else if (key === '.') {
        calculator.addDecimal();
    } else if (key === '+') {
        calculator.operate('+');
    } else if (key === '-') {
        calculator.operate('-');
    } else if (key === '*') {
        calculator.operate('*');
    } else if (key === '/') {
        calculator.operate('/');
    } else if (key === 'Enter') {
        calculator.calculate();
    } else if (key === 'Backspace') {
        calculator.backspace();
    }

    if (key === 'C' || key === 'c') {
        calculator.clearDisplay();
    }
});

const clearButton = document.querySelector('.btn-clear');
clearButton.addEventListener('click', function () {
    calculator.clearDisplay();
});