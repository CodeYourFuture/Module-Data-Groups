function contains(obj, key) {
   if (typeof obj !== "object" || obj === null) {
    return false;
  }

  // Check if the key exists in the object
  return obj.hasOwnProperty(key);

}

console.log(contains({a: 1, b: 2}, 'a')); // true
console.log(contains({a: 1, b: 2}, 'c')); //

module.exports = contains;


