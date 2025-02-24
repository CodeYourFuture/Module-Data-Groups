function findMax(elements) {
    let sorted = [...elements].sort((a, b) => a - b)
    if (elements.length === 0)return "-Infinity"
    else return sorted[sorted.length -1] 
}

console.log(findMax([]))
module.exports = findMax;
