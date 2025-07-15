function findMax(elements) {
    const nums = elements.filter(n => typeof n === "number" && !isNaN(n));
    return nums.length === 0 ? -Infinity : Math.max(...nums);
}

module.exports = findMax;