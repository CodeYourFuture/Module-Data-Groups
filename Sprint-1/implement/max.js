function findMax(elements) {
    let max = -Infinity;
    for (const value of elements) {
        if (typeof value === "number") {
            max = Math.max(max, value);
        }
    }
    return max;
}




module.exports = findMax;
