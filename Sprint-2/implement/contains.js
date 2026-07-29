function contains(object, property) {
  if (Array.isArray(object)) {
    throw new Error("Expected an object, received an array");
  }
  const obj = Object.keys(object);
  if (obj.length === 0) {
    return false;
  }
  return obj.includes(property);
}
console.log(contains({ 1: "o", 2: "k" }, 1));
module.exports = contains;
