function calculateFrequency(changes) {
    return changes.reduce((sum, change) => sum + change, 0);
}

// Example usage:
let inputData = [1, -2, 3, 1];
console.log(calculateFrequency(inputData));