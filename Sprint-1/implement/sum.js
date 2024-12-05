function sum(array) {
    return array
        .filter(item => typeof item === "number") // Filter only numerical elements
        .reduce((acc, num) => acc + num, 0); // Sum up numerical elements
}

module.exports = sum;

