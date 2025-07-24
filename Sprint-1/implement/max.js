function findMax(elements) {
    if (!Array.isArray(elements)) {
        throw new Error("Invalid input");
    }

    // Filter only valid numbers
    const numericValues = elements.filter(el => typeof el === 'number' && !isNaN(el));

    if (numericValues.length === 0) {
        return -Infinity;
    }

    let max = numericValues[0];
    for (let i = 1; i < numericValues.length; i++) {
        if (numericValues[i] > max) {
            max = numericValues[i];
        }
    }
    return max;
}

module.exports = findMax;
