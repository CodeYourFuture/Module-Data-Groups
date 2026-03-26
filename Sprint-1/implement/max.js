
function findMax(elements) {
    // Filter out non-numeric values
    const numbers = elements.filter(element => typeof element === 'number');

    // If no numbers in array, return -Infinity
    if (numbers.length === 0) {
        return -Infinity;
    }

    // Find and return the maximum value
    return Math.max(...numbers);
}

module.exports = findMax;
