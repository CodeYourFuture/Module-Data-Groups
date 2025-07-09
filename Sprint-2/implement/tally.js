function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Invalid input");
    }

    return items.reduce((acc, item) => {
        if (typeof item !== 'string') {
            throw new Error("Invalid input");
        }
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

module.exports = tally;
