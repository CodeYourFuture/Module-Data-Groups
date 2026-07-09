function contains(object, value) {
  const isNotObject =
    typeof object !== "object" ||
    object === null ||
    Array.isArray(object) ||
    Object.keys(object).length < 1;

  if (isNotObject) return false;

  return Object.keys(object).includes(value);
}

console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains(["a", "b"], "a"));

module.exports = contains;
