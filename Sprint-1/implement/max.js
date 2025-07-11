function findMax(elements) {
    // Filter out non-numeric values and convert strings containing numbers to numbers
    const numbers = elements.filter(element => !isNaN(element) && element !== '');
    
    // If array is empty or has no numeric values, return -Infinity
    if (numbers.length === 0) return -Infinity;
    
    // Use Math.max with spread operator to find the maximum value
    return Math.max(...numbers);
}

module.exports = findMax;
