// 1. filter: leep only elements that are onlyNumbers.
// 2. spread (...) take the numbers out of the Array
// 3. Math.max find the largest number and return -infinity if empty.

function findMax(elements) {
    const onlyNumbers = elements.filter((element) => typeof element === "number" && !Number.isNaN(element))
    return Math.max(...onlyNumbers);
}

module.exports = findMax;

