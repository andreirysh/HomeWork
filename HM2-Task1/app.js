// function makeObjectDeepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     const copyOfObj = Array.isArray(obj) ? [] : {};

//     for (let key in obj) {

//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             copyOfObj[key] = makeObjectDeepCopy(obj[key]);
//         }

//     }
//     return copyOfObj;
// }


// function selectFromInterval(array, firstInterval, secondInterval) {

//     let startInterval, endInterval;

//     const isNumInvalid = !array.every((num) => typeof num === 'number') || typeof firstInterval !== 'number' || typeof secondInterval !== 'number';

//     if (isNumInvalid) {
//         throw new Error('Ошибка!');
//     }

//     if (firstInterval < secondInterval) {
//         startInterval = firstInterval;
//         endInterval = secondInterval;
//     }

//     else {
//         startInterval = secondInterval;
//         endInterval = firstInterval;
//     }

//     return array.filter((num) => num >= startInterval && num <= endInterval);
// }

const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        let from = this.from;
        let to = this.to;
        const isNumInvalid = typeof this.from !== 'number' || typeof this.to !== 'number' || this.to < this.from

        if (isNumInvalid) {
            throw new Error('Ошибка!')
        }

        return {
            next() {
                if (from <= to) {
                    return { value: from++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};


