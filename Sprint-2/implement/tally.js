function tally(items) {
    if (!Array.isArray(items)) {
        throw new TypeError("Expected an array as input");
    }

    return items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

module.exports = tally;
