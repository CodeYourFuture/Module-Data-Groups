function findMax(elements) {
    let max = -Infinity;
    elements.forEach((element) => { if (element > max) max = element });
    return max;

}

module.exports = findMax;
