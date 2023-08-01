function convertNumber(num, base) {
    return Number(num).toString(base);
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

    const base = prompt('Введите систему счисления');

    if (!isNumValid(base)) {

        console.log('Некорректный ввод!');
        return;

    }

    const result = convertNumber(Number(num), Number(base));
    console.log(result);
}

convertNumberToBase()
