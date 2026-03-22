function contains(object, property) {
  // Check if object is a valid object (not null, array, number, string, etc.)
  //if so return false
  if (typeof object !== 'object' || object === null) {
    return false;
  }
  // Check if the object has the specified property as its own property
  return object.hasOwnProperty(property);
}

module.exports = contains;

// console.log(contains({ a: 1, b: 2 }, 'a')); // true
// console.log(contains({ a: 1, b: 2 }, 'c')); // false
// console.log(contains({}, 'a')); // false
// console.log(contains([], 'a')); // false
// console.log(contains(1, 'a')); // false
// console.log(contains("NotANumber", 'a')); // false
// console.log(contains(null, 'a')); // false

