function findMax(elements) {
    if (!Array.isArray(elements)) return null
    const maxNum = elements.filter(n => typeof n === 'number' && !isNaN(n))
    return Math.max(...maxNum)
}


module.exports = findMax;
