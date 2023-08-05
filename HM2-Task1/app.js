function makeObjectDeepCopy(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copyOfObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {

        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copyOfObj[key] = makeObjectDeepCopy(obj[key]);
        }

    }
    return copyOfObj;
}

function selectFromInterval(array, firstInterval, secondInterval) {

    let startInterval, endInterval;

    const isNumInvalid = !array.every((num) => typeof num === 'number') || typeof firstInterval !== 'number' || typeof secondInterval !== 'number';

    if (isNumInvalid) {
        throw new Error('Ошибка!');
    }

    if (firstInterval < secondInterval) {
        startInterval = firstInterval;
        endInterval = secondInterval;
    }

    else {
        startInterval = secondInterval;
        endInterval = firstInterval;
    }

    return array.filter((num) => num >= startInterval && num <= endInterval);
}

const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]: function* () {
        const isNumInvalid = typeof this.from !== 'number' || typeof this.to !== 'number' || this.to < this.from

        if (isNumInvalid) {
            throw new Error('Ошибка!')
        }

        for (let i = this.from; i <= this.to; i++) {
            yield i
        }
    }
};

