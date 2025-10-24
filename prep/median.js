function calculateMedian(list) {
    const middleIndex = Math.floor(list.length / 2);
    const median = list.splice(middleIndex, 1)[0];

    return median;
}

module.exports = calculateMedian;