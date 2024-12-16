function tally() {}
function tally(items) {
    if(!Array.isArray(items)) {
        return "Invalid input";
    }

    const count = {};
    for (const item of items) {
        counts[item] = (counts[item] || 0) + 1;
    }

    return counts;
}


module.exports = tally;
