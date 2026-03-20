
function findMax(arr) {
    // filter out non-numbers, non-numeric strings, and NaN. ALso convert string numbers to number
    const numericValues = arr
        .filter((item) => typeof item === "number" || (typeof item === "string" && item.trim() !== "" && !isNaN(item)))
        .map((item) => Number(item));

    // returns -Infinity i no numerical elements are found
    if (numericValues.length === 0) return -Infinity;

    return Math.max(...numericValues);
}

module.exports = findMax;
