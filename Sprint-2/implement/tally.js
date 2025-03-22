function tally(items) {
    if(!Array.isArray(items)) {
        return "Invalid input";
    }

    const count = {};
    for (const item of items) {
        count[item] = (count[item] || 0) + 1;
    }

    return count;
}

module.exports = tally;
