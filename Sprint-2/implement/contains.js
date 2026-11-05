function contains(input, key) {
    if (input === null || typeof input !== "object") {
        throw new Error("contains requires an object")
    } else {for (const keys in input){
        if (keys === key) {
            return true
        }
    }} return false
}
console.log(contains({a: 1}, 'a'))
module.exports = contains;
