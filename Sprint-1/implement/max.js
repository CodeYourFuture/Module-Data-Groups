function findMax(elements) {
    if (!Array.isArray(elements)) return null;
    const nums = elements.filter(x => typeof x === 'number' && !isNaN(x));
    if (nums.length === 0) return -Infinity;
    
    const positives = nums.some(n => n > 0);
    const negatives = nums.some(n => n < 0);

    if (positives && negatives) {
        // this helps us check and considers all values both sides of zer0
        let maxAbs = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (Math.abs(nums[i]) > Math.abs(maxAbs)) {
                maxAbs = nums[i];
            }
        }
        return maxAbs;
    } else {
        return Math.max(...nums);
    }
    
    /* if (nums.length === 1) return elements[0];

    const arranged = [...nums].sort((a, b) => a - b);
    const highest = arranged[arranged.length - 1];
    return highest; */
}

module.exports = findMax;
