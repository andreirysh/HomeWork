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
    if (!isNumValid(firstNum)) {

        return "Некорректный ввод!";

    }
    
    const secondNum = prompt('Введите второе число');
    if (!isNumValid(secondNum)) {

        return "Некорректный ввод!";

    }
    
    const sum = calculateSum(Number(firstNum), Number(secondNum));
    const average = calculatePrivate(Number(firstNum), Number(secondNum));

    return `Ответ: ${sum}, ${average}`;
}

console.log(sumAndAverage());