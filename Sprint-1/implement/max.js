function findMax(elements) {
    if(!Array.isArray(elements)) {
        throw new Error("findMax requires an array of numbers");
    }

    let max = -Infinity;

    for (const element of elements) {
        if (typeof element !== "number" || Number.isNaN(element)) {
            throw new Error("findMax requires an array of numbers");
        }

        if (element > max) {
            max = element;
        }
    }
    return max;
}

module.exports = findMax;
