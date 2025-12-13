function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity;
    }

    let max = -Infinity;

    for (let i = 0; i < elements.length; i++) {
        let current = elements[i];

        // using Number.isFinite keeps NaN or Infinity out of the comparison
        if (typeof current === "number" && Number.isFinite(current)) {
            if (current > max) {
                max = current;
            }
        }
    }

    return max;
}

module.exports = findMax;
