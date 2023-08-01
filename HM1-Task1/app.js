function convertNumber(num, base) {
    return num.toString(base);
}

function isNumValid(number) {
    return !isNaN(parseInt(number));
}

function convertNumberToBase() {
    const num = prompt('Введите число');

    if (!isNumValid(num)) {
        console.log('Некорректный ввод!');
        return;
    }

    const base = prompt('Введите систему счисления от 2 до 36');

    if (!isNumValid(base)) {
        console.log('Некорректный ввод!');
        return;
    }

    const result = convertNumber(+num, +base);
    console.log(result);
}

convertNumberToBase();
