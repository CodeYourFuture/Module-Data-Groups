
function findMax(arr) {
    // Requirement 7: Filter out non-numbers and non-numeric strings
    // Requirement 8: If only non-numbers exist, numericValues will be empty
    const numericValues = arr
        .filter((item) => {
            // Check if it's a number and not NaN
            if (typeof item === "number" && !isNaN(item)) return true;
            // Check if it's a numeric string that isn't just whitespace
            if (typeof item === "string" && item.trim() !== "" && !isNaN(item)) return true;
            return false;
        })
        .map((item) => Number(item));

    // Requirement 2 & 8: Returns -Infinity if no numerical elements are found
    if (numericValues.length === 0) return -Infinity;

    // Requirement 1, 3, 4, 5, 6: Use Math.max with the spread operator
    return Math.max(...numericValues);
}

module.exports = findMax;


