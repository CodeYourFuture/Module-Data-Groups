function findMax(elements) {
    const numbers = elements.filter(Number.isFinite);

    if (numbers.length == 0) {
        return -Infinity;
    }

    return Math.max(...numbers);
}

module.exports = findMax;
