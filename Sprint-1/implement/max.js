function findMax(elements) {
    let max = -Infinity;
    for (let i = 0; i < elements.length; i += 1) {
        if (typeof elements[i] == "number" && !isNaN(elements[i])) {
            if (elements[i] > max) {
                max = elements[i];
            }
        }
    }
    return max;
}

module.exports = findMax;
