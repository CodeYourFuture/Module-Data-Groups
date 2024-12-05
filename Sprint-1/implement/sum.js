function sum(elements) {
  // Handle an empty array
    if (elements.length === 0) {
        return 0;
    }

    // Filter out non-numerical elements
    const numericElements = [];
    for (const item of elements) {
        if (typeof item === "number") {
            numericElements.push(item);
        }
    }

    // Calculate the sum of numerical elements
    let total = 0;
    for (const number of numericElements) {
        total += number;
    }

    return total; // Return the total sum
}


module.exports = sum;
