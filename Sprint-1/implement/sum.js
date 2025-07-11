function sum(elements) {
    if (!Array.isArray(elements))                 // If input is not an array, return 0.
        return 0;

    return elements
        .filter(item => Number.isFinite(item))        // Filter for only real numbers, excluding NaN, Infinity, -Infinity
        .reduce((acc, curr) => acc + curr, 0);        // Using reduce to add up the filtered numbers, starting from 0.
}
module.exports = sum;