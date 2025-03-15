function findMax(elements) {
    const numericalValues = element.filter(e => typeof e === 'number');
    if (numericalValues.length === 0) {
        return -Infinity;
    }

    return Math.max(...numericalValues);
}

module.exports = findMax;
