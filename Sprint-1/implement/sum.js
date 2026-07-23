function sum(elements) {
    const addNum = elements.reduce((item, n) => item + n, 0);
    return addNum;
}

module.exports = sum;
