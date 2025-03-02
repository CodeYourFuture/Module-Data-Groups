function findMax(elements) {

    const numericElements = elements.filter((el) => typeof el === "number" && !isNaN(el));
    if (numericElements.length === 0) return -Infinity;
    return Math.max(...numericElements);
}
    

module.exports = findMax;
