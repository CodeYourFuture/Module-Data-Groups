function contains(object, property)  {
    if (typeof object !== 'object' || object === null || Array.isArray(object)) {
        return false;
    }
    return object.hasOwnProperty(property);
}



const object={name:'jin', age:13}

console.log (contains(object, 'age'))
console.log (contains(object, 'nice'))

module.exports = contains;
