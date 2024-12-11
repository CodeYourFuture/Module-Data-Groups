function findMax(elements) {
    const filteredElements = elements.filter(item => typeof item === "number" && !isNaN(item));

    return Math.max(...filteredElements);
}

module.exports = findMax;

console.log(findMax([4, "Hi", 10, 3,"me", 11, 20]));
