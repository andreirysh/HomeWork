function concatStrings(str, separator) {
    let result = str || '';
    let strSeparator = separator || '';

    function nextStrConcat(nextStr) {
        if (typeof nextStr === 'string') {
            result += strSeparator + nextStr;
            return nextStrConcat;
        }

        return result;
    }

    return nextStrConcat;
}

class Calculator {
    constructor(x, y) {
        if (!this.isNumValid(x) || !this.isNumValid(y)) {
            throw new Error('Числа невалидные');
        }

        this.x = x;
        this.y = y;
        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    isNumValid(num) {
        return typeof num === 'number' && isFinite(num) && !Number.isNaN(num);
    }

    setX(num) {
        if (!this.isNumValid(num)) {
            throw new Error('Ошибка!');
        }

        this.x = num;
    }

    setY(num) {
        if (!this.isNumValid(num)) {
            throw new Error('Ошибка!');
        }

        this.y = num;
    }

    logSum() {
        console.log(this.x + this.y);
    }

    logMul() {
        console.log(this.x * this.y);
    }

    logSub() {
        console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y === 0) {
            throw new Error('На ноль делить нельзя');
        }
        
        console.log(this.x / this.y);
    }
}
