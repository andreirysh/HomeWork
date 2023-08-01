function convertNumber(num, base) {
    return num.toString(base);
}

function isNumValid(number) {
    return !isNaN(parseInt(number));
}

function convertNumberToBase() {
    const num = prompt('Введите число');
    const base = prompt('Введите систему счисления от 2 до 36');

    if (!isNumValid(num) || !isNumValid(base) || base < 1 || base > 37) {
        return 'Некорректный ввод!';  
    }

    const result = convertNumber(+num, +base);
    return result;
}

console.log(convertNumberToBase());
