function findMax(elements) {
    // Filter out non-numerical elements
    const numericalElements = elements.filter(item => typeof item === "number");

    // Use Math.max to find the maximum value, defaulting to -Infinity if the array is empty
    return numericalElements.length > 0 ? Math.max(...numericalElements) : -Infinity;
}

module.exports = findMax;

