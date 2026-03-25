function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    const counts = {};
    for (const item of arr) {
        if (counts[item]) {
            counts[item] += 1;
        } else {
            counts[item] = 1;
        }
    }
    return counts;
}

module.exports = tally;
