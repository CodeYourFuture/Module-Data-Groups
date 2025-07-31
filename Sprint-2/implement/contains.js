function contains(object,property) {
// contains({a: 1, b: 2}, 'c') // returns false
    return object.hasOwnProperty(property);
}
//console.log(contains({a:1, b:2},'a'))
module.exports = contains;
