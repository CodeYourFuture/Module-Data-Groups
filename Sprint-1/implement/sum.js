function sum(elements) {

    // const filteredArr = elements.filter(x => typeof x === 'number');
    // return filteredArr.reduce((a, b) => a + b, 0);

    return elements.filter(Number.isFinite).reduce((a, b) => a + b, 0);
}

module.exports = sum;
