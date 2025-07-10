function findMax(elements) {
    // Check if the input is an array
    if(!Array.isArray(elements)){
        return null; // Return null if the input is not an array
    }
    // Check if the input is an empty array
    if (elements.length === 0) {
        return -Infinity; // Return -Infinity if the array is empty
    }
    
    // Filter out non-numeric values and find the maximum
    const numericElements = elements.filter(element => typeof element === 'number').sort((a, b) => a - b);      
    if (numericElements.length === 0) {
        return -Infinity; // Return -Infinity if there are no numeric elements
    }
    
    // Return the maximum value from the numeric elements
    return Math.max(...numericElements);
}

module.exports = findMax;
