function sum(elements) {
    // Filtering out non-numeric values
    const numericElements = elements.filter(element => typeof element === 'number' && !isNaN(element));

    // If there are no numeric values, return 0
    if (numericElements.length === 0) {
        return 0;
    }

    // Using reduce to calculate the sum of the numeric elements
    return numericElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = sum;
