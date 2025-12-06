function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity;
    }

    let max = -Infinity;

    for (let i = 0; i < elements.length; i++) {
        let current = elements[i];

        if (typeof current === "number") {
            if (current > max) {
                max = current;
            }
        }
    }

    return max;
}

module.exports = findMax;
