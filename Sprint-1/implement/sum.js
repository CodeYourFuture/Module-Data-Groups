function sum(elements) {
    return elements.reduce((runningTotal, currentValue) => {
        if (typeof currentValue === "number") {
            return runningTotal + currentValue;
        }
        return runningTotal;
    }, 0);
}

module.exports = sum;
