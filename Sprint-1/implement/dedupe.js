function dedupe(values) {
    // Check if the input is an array- if not returns empty array to avoid errors.
    if (!Array.isArray(values)) return [];

    const seen = new Set();        // Using Set to track values that have already been seen.
    const result = [];             // Empty array to store values without duplicates.

    for (const value of values) {  // Iterate through each value in the input array.
        if (!seen.has(value)) {    // Check if the value has not already been seen/ not in the Set yet
            seen.add(value);       // Mark value as seen and add to the Set if new.
            result.push(value);    // Add it to the result array, keeping only the first time a unique item appears.
        }
    }

    return result;                 // After looping through the whole array, return a new array with duplicates removed, preserving order.

}
module.exports = dedupe;



