function contains(obj, property) {
    return property in obj;
}

module.exports = contains;

console.log(contains({name: "Mike", age: 25, city: "Cape Town"}, "age"));