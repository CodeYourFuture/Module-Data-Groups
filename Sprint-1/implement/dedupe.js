function dedupe(arr) {
    arr = new Set(arr); // Using `new Set()` to store only unique values in the same variable
    return Array.from(arr); // return the new array using `Array.from()`
}

console.log(dedupe(['a','V','a','b','b','c'])); // ['a','b','c']
module.exports = dedupe;