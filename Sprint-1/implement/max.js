function findMax(elements) {
    let max = -Infinity;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (typeof element === "number" && !isNaN(element)) {
            if (element > max) {
                max = element;
            }
        }
    }
    return max;
}

module.exports = findMax;
