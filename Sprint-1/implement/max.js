function findMax(elements) {
    let newList = elements.filter(item => typeof item === "number");
    if (newList.length > 0) {
        return Math.max(...newList)
    }
    else return -Infinity
}

module.exports = findMax;
