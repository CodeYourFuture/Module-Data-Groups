function sum(elements) {
    // Check if the input is an array
    if (!Array.isArray(elements)) {
        return null; // Return null if the input is not an array
    }
    
    // Check if the input is an empty array
    if (elements.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    
    // Filter out non-numeric values and calculate the sum
    const numericElements = elements.filter(element => typeof element === 'number');
    
    // Return the sum of numeric elements
    return numericElements.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sum;
