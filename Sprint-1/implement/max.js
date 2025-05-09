function findMax(elements) {
    // Check if the array is empty
    if (elements.length === 0) {
        return -Infinity; // Return -Infinity for empty array
    }

    let max = -Infinity; // Initialize max to the lowest possible value

    // Iterate through each element in the array
    for (let element of elements) {
        // Check if the element is a number
        if (typeof element === 'number') {
            // Update max if the current element is greater
            if (element > max) {
                max = element;
            }
        }
    }

    return max; // Return the maximum value found
}

module.exports = findMax;
