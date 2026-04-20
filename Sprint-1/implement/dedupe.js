function dedupe(arr) {
    // (Though requirements suggest it will be an array)
    if (!Array.isArray(arr)) return [];
    // The spread operator [...] preserves the first-occurrence order
    return [...new Set(arr)];
}

module.exports = dedupe;