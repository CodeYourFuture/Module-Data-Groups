function calculateMean(list) {
    if (list.length === 0) return 0; // Handle empty list case
    const sum = list.reduce((acc, num) => acc + num, 0);
    return sum / list.length;
}

module.exports = calculateMean;
