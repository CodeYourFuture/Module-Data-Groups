function findMax(elements) {
    const numbers = elements.filter(element => typeof element === 'number' && !isNaN(element));
    if (numbers.length === 0) {
        return -Infinity;
    }
    return Math.max(...numbers);
}

module.exports = findMax;
