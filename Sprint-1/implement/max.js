 //let nums = [20, 10, 30];
function findMax(nums) {
    const validNumbers = nums.filter((n) => typeof n === "number");
    return Math.max(...validNumbers);
}

module.exports = findMax;
