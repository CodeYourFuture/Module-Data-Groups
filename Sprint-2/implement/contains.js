function contains(obj,key) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false;
  }
  return key in obj;
}
console.log(contains({a: 1, b: 2})) // returns false
module.exports = contains;
