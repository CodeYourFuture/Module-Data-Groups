function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Invalid input");
    }
    // Use object with no prototype to avoid collisions (e.g. "toString")
    const counts = Object.create(null);
    for (const item of items) {
        counts[item] = (counts[item] || 0) + 1;
    }
    return counts;
}

module.exports = tally;
