function sum(elements) {
    // Initialize sum to 0
    let total = 0;

    // Iterate over the elements of the array
    for (let i = 0; i < elements.length; i++) {
        // Check if the current element is a valid number (ignores non-numeric values)
        if (typeof elements[i] === 'number' && !isNaN(elements[i])) {
          total += elements[i]; // Add to the sum
        }
    }

    return total; // Return the final sum
}

module.exports = sum;

