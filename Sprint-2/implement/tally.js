function tally(items) {
    if (!Array.isArray(items)) {
        throw new TypeError("Expected an array as input");
    }

    return items.reduce((acc, item) => {
        if (Object.hasOwn(acc, item)) {
            acc[item] += 1;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});
}

module.exports = tally;