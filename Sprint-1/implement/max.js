function findMax(elements) {
    if (!Array.isArray(elements)) return null;                             // Check if input is an array


    const numbersOnly = elements.filter(                                   // Filter out non-numeric values: keep only 
        item => Number.isFinite(item)                                      // Ensure all elements are finite numbers not strings, undefined, NaN
    );

    // Use Math.max with spread operator to find the largest number
    return numbersOnly.length > 0 ? Math.max(...numbersOnly) : null;       // Return max or null if no valid numbers
}

module.exports = findMax;

/*
console.log(findMax([1, 5, -Infinity, "hello", 3]));
console.log(findMax(["a", null, Infinity]));                                                   
*/