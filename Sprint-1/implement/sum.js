function sum(elements) {
    // Filter out non-numeric values
    const numbers = elements.filter(element => typeof element === 'number');

    // Sum all the numbers using reduce
    return numbers.reduce((total, current) => total + current, 0);
}

module.exports = sum;
