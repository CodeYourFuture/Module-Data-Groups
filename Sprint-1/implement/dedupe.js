function dedupe(list) {
    // Use a Set to remove duplicates while preserving the order
    return [...new Set(list)];
}

module.exports = dedupe;
