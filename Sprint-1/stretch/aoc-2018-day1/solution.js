function calculateFrequency(changes) {
    return changes.reduce((acc, change) => acc + change, 0);
}

// Example input
const inputChanges = [1, -2, 3, 1];  // Replace with your actual input
const resultingFrequency = calculateFrequency(inputChanges);

console.log("Resulting frequency:", resultingFrequency);
