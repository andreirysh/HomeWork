function checkIfNumberValid(num){
    if (!isNumValid(num)) {

        return "Некорректный ввод!";

    }
}

function isNumValid(number) {
    return !isNaN(parseInt(number));
}

function calculateSum(num1, num2) {
    return num1 + num2;
}

function calculatePrivate(num1, num2) {
    return num1 / num2;
}

function sumAndAverage() {
    const firstNum = prompt('Введите первое число');
    checkIfNumberValid(firstNum);
    
    const secondNum = prompt('Введите второе число');
    checkIfNumberValid(secondNum);
    
    const sum = calculateSum(Number(firstNum), Number(secondNum));
    const average = calculatePrivate(firstNum, secondNum);

    return `Ответ: ${sum}, ${average}`;
}

console.log(sumAndAverage());