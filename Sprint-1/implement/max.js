function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity; // Return -infinity for an empty array
    }
    
    // If non-numeric elements are present, we will ignore them
    elements = elements.filter(element => typeof element === 'number');
    if (elements.length === 0) {
        return -Infinity; // if all elements are non-numeric, return -Infinity
    }

    // Start with the first numeric element as the maximum
    let max = elements[0]; // Assume the first element is the maximum
    
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] > max) {
        max = elements[i]; // Update max if a larger element is found
        }
    }
    
    return max; // Return the maximum value found
}

module.exports = findMax;
