function contains(object, property) {
    return Object.hasOwn(object, property);
}

module.exports = contains;

console.log(contains({a: 1, b: 2}, 'a'));

