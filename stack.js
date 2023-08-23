class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(maxStackElems = 10) {
        if (!Number.isInteger(maxStackElems) || maxStackElems <= 0) {
            throw new Error("Ошибка!");
        }

        this.maxStackElems = maxStackElems;
        this.size = 0;
        this.topElem = null;
    }

    push(elem) {
        if (this.size === this.maxStackElems) {
            throw new Error("Стек переполнен");
        }

        const newNode = new Node(elem);
        newNode.next = this.topElem;
        this.topElem = newNode;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            throw new Error("Стек пуст");
        }

        const nodeToRemove = this.topElem;
        this.topElem = this.topElem.next;
        this.size--;
        return nodeToRemove.value;
    }

    peek() {
        return this.topElem ? this.topElem.value : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const newArray = [];
        let element = this.topElem;
        while (element !== null) {
            newArray.push(element.value);
            element = element.next;
        }

        return newArray;
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error("Неитерируемый объект");
        }

        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }

        return stack;
    }
}

module.exports = { Stack };

