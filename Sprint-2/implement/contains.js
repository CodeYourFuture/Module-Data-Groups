function contains(object, prop) {
    return object.hasOwnProperty(prop)
}
console.log(contains([1,2],"a"));
module.exports = contains;
