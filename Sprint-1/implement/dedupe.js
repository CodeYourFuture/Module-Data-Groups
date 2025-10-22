function dedupe(arr) {
    const newArr = new Set(arr); // Using `new Set()` to store only unique values in newArr
    return Array.from(newArr); // return athe new array using `Array.from()`
}

console.log(dedupe(['a','V','a','b','b','c'])); // ['a','b','c']
module.exports = dedupe;