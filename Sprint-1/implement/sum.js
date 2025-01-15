function sum(elements) {
    if (elements.length === 0) {
        return 0;
    }

    const numericalElement = elements.filter((item) => typeof item === "number" && !isNaN(item));

    if (numericalElement.length === 0) {
        return NaN;
    }

    return numericalElement.reduce((cumulative, item) => cumulative + item, 0);
}

console.log(sum([NaN, 1])); // Output: 1
console.log(sum([NaN, NaN])); // Output: NaN
console.log(sum([])); // Output: 0
console.log(sum([1, 2, 3])); // Output: 6


module.exports = sum;
