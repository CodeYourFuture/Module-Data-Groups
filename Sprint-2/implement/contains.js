function contains(object,key) {
    return object.hasOwnProperty(key) && Array.isArray(object) === false
}

console.log(contains({ a: 1, b: 2 }, 'a'))
console.log(contains([1, 2, 3], 1))
console.log(contains({}))
console.log(contains({ a: 1, b: 2 }, '1'))


module.exports = contains;
