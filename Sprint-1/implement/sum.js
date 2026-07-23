function sum(elements) {
    const addNum = elements.reduce((item, n) => item + n, 0);
    return Number(addNum.toFixed(10));
}

module.exports = sum;
