function calculateDifference(dataset) {
    return dataset.reduce((total, pair) => {
        if (pair.length !== 2) {
            throw new Error("Each pair in the dataset must have exactly two subarrays.");
        }

        const [set1, set2] = pair;

        if (set1.length < 5 || set2.length < 5) {
            throw new Error("Each subarray must have at least 5 numbers.");
        }

        // Sort sets in descending order
        const sortedSet1 = [...set1].sort((a, b) => b - a);
        const sortedSet2 = [...set2].sort((a, b) => b - a);

        // Calculate differences for top 5 elements
        let count = 0;
        for (let i = 0; i < 5; i++) {
            count += Math.abs(sortedSet1[i] - sortedSet2[i]);
        }

        return total + count;
    }, 0);
}

// Example usage
const dataset = [
    [[39687, 54930/*, 12345, 67890, 11111*/], [86219, 31559, /*54321, 9876, 22222*/]]/*,
    [[48536, 73145, 98765, 43210, 11111], [19932, 82178, 65432, 98765, 33333]],*/
    // Add more pairs of arrays here...
    
];

const result = calculateDifference(dataset);
console.log("Total Difference:", result);
