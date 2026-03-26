function dedupe(elements) {
    // Using a Set to remove duplicates while preserving insertion order
    // Then spread the Set back into an array
    return [...new Set(elements)];
}

module.exports = dedupe;
