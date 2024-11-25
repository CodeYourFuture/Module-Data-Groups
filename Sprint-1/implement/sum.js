function sum(elements) {
    return elements
        .filter(item => typeof item === 'number')
        .reduce((total, num) => total + num, 0);
}

module.exports = sum;
