function dedupe(values) {
    // Check if the input is an array- if not returns empty array to avoid errors.
    if (!Array.isArray(values)) return [];

    const unique = new Set();      // Using Set to track values that are unique.
    const result = [];             // Empty array to store values without duplicates.

    for (const value of values) {  // Iterate through each value in the input array.
        if (!unique.has(value)) {  // Check if the value has not already been added to unique.
            unique.add(value);     // Markvalue and add to the Set if new.
            result.push(value);    // Add it to the result array, keeping only the first occurrence of each unique value.
        }
    }

    return result;                 // After looping through the whole array, return a new array with duplicates removed, preserving order.

}
module.exports = dedupe;



