function contains(obj, key) {
  return Object.hasOwn(obj, key);
}

console.log(contains([1, 2, 3, 4], "ingredients"));
module.exports = contains;
