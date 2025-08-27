function dedupe(array) {
    const createSet = new Set()
    const newArray = []
    if(!Array.isArray(array) || array.length ===0) {
        return []
    }
    for (let i = 0 ; i < array.length; i++) {
        const element = array[i]
        if (!createSet.has(element)) {
            createSet.add(element)
            newArray.push(element)
        }
    }
    return newArray
}

console.log(dedupe([1,3,4,3,3,1,6,6]))
console.log(dedupe([1,3,4,6,7,8]))
console.log(dedupe(['a','a','a','c','c','g','g',5,5]))

module.exports = dedupe