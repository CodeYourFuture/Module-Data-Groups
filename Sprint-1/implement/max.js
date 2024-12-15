function findMax(elements) {
    const numbers = elements.filter(element => typeof element === 'number');
    if (numbers.length === 0) {
        return -Infinity;
    }
    return Math.max(...numbers);
}

module.exports = findMax;
// expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60)