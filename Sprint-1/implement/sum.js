function sum(elements) {
    if (elements.length === 0) {
        return 0; // Return 0 for an empty array
    }

    // Filter out non-numeric elements
    elements = elements.filter(element => typeof element === 'number');
    
    if (elements.length === 0) {
        return 0; // If all elements are non-numeric, return 0
    }

    // Sum the numeric elements
    let total = 0;
    for (let i = 0; i < elements.length; i++) {
        total += elements[i];
    }

    return total; // Return the total sum
}

module.exports = sum;
