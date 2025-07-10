function findMax(arr) {
    let maxNum = -Infinity;
    
    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item > maxNum) {
                maxNum = item;
            }
        }
    }
    
    return maxNum;
}

module.exports = findMax;
