function sum(elements) {

    return elements.reduce((acc, curr) => (typeof curr === "number" ? acc + curr : acc), 0)
}

module.exports = sum;
