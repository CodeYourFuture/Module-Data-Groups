// Implement a function called contains that checks an object contains a
// particular property

// E.g. contains({a: 1, b: 2}, 'a') // returns true
// as the object contains a key of 'a'

// E.g. contains({a: 1, b: 2}, 'c') // returns false
// as the object doesn't contains a key of 'c'

function contains(obj, property) {
  if (obj === null || obj === undefined) {
    return false;
  }

  return property in obj;
}

module.exports = contains;
