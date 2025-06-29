function findMax(elements) {
    if (!Array.isArray(elements)) return -Infinity; // checks if input is an array.

    
    const numbersOnly = elements.filter( // Filter out non-numeric values
        item => typeof item === "number" && !isNaN(item) // Ensures all elements are numbers not strings, objects, NaN
    );

    // Use Math.max with spread operator to find the largest number
    return numbersOnly.length > 0 ? Math.max(...numbersOnly) : -Infinity;
}

module.exports = findMax;
