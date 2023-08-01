function convertNumber(num, base) {
    return Number(num).toString(base);
}

function isNumValid(number) {
    return !isNaN(parseInt(number));
}

function convertNumberToBase() {
    const num = prompt('Введите число');
    const base = prompt('Введите систему счисления');

    const numberToConvert = Number(num);
    const baseOfNum = Number(base);

    if (!isNumValid(numberToConvert) || !isNumValid(baseOfNum)) {

        console.log('Некорректный ввод!');
        return;

    }

    const result = convertNumber(numberToConvert, baseOfNum);
    console.log(result);
}

convertNumberToBase()
