function findMax(elements) {
    const numbers = elements.filter(e => typeof e === 'number');
    return Math.max(...numbers);
}

module.exports = findMax;
