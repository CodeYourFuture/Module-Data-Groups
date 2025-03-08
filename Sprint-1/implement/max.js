function findMax(elements) {
    let numericValues = elements.filter(el => typeof el === 'number');
    if (numericValues.length === 0) return -Infinity;
    
    return Math.max(...numericValues);
}

console.log(findMax(['a', 10, 'b', 3]))
module.exports = findMax;
