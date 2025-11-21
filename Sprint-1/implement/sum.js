function sum(elements) {
    return elements
    .filter(elements => typeof elements === "number" && !Number.isNaN(elements))
    .reduce((total, elements) => total + elements, 0);
}

module.exports = sum;
