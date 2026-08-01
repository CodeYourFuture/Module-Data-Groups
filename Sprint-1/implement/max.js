function findMax(elements) {
    // Filtering out non-numeric values    
    const numericElements = elements.filter(element => typeof element === 'number' && !isNaN(element));

    // If there are no numeric values, return -Infinity
    if (numericElements.length === 0) {
        return -Infinity;
    }

    // Using Math.max to find the maximum value in the numeric elements
    return Math.max(...numericElements);    
}

module.exports = findMax;
