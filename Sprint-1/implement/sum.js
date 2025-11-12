function sum(elements) {
    // This variable will store the total sum
    let total = 0;

    // Go through each element in the array
    for (let i = 0; i < elements.length; i++) {
        let current = elements[i]; // get the current element

        // Only add it if it's a number
        if (typeof current === "number") {
            total = total + current; // add to total
        }
    }

    // Return the sum of all numbers
    return total;
}

module.exports = sum;
