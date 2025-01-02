function contains(obj, property) {
    return obj.hasOwnProperty(property);
}

module.exports = contains;

console.log(contains({name: "Mike", age: 25, city: "Cape Town"}, "age"));