function sum(elements) {
    const numbers = elements.filter(element => typeof element === 'number');

    return numbers.reduce((acc, current) => acc + current, 0);
}

module.exports = sum;
