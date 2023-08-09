Array.prototype.myFilter = function(callbackFn, context) {
    const filteredArr = [];

    for (let i = 0; i < this.length; i++) {
        const result = callbackFn.call(context, this[i], i, this);

        if (result) {
            filteredArr.push(this[i]);
        }
    }

    return filteredArr;
};

function createDebounceFunction(callbackFn, delayInMs) {
    let timeoutID;

    return function () {
        clearTimeout(timeoutID);

        timeoutID = setTimeout(() => {
            callbackFn();
        }, delayInMs);
    }
};


