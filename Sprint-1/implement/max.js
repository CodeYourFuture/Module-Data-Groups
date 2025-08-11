function findMax(elements) {
    const numericValues = elements.filter(value => typeof value === 'number' && !isNaN(value));
    if (numericValues.length > 0) {
        return Math.max(...numericValues);
    } else {
        return -Infinity;
}
}

module.exports = findMax;
