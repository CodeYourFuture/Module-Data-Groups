function dedupe(arr) {
    // The spread operator [...] converts back to an array.
    return [...new Set(arr)]; //New Set(arr) removes duplicates automatically
}
