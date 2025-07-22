function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Invalid input: expected an array");
    }
    return items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

module.exports = tally;
