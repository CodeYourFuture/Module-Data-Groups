function sum(elements) {
    return elements
    .filter(e => typeof e === "number")
    .reduce((total,num) => total + num, 0);
}

module.exports = sum;
