function sum(elements) {
    // Initialize the total sum to 0
    let total = 0;

    // Iterate through each element in the array
    for (let element of elements) {
        // Check if the element is a number
        if (typeof element === 'number') {
            total += element; // Add the number to the total
        }
    }

    // Return the total sum
    return total;
}

module.exports = sum;

