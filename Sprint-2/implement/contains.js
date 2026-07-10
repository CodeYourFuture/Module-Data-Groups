function contains(object, value) {
  const isNotObject =
    typeof object !== "object" || object === null || Array.isArray(object);

  if (isNotObject) return false;

  return Object.hasOwn(object, value);
}

console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains(["a", "b"], "a"));

module.exports = contains;
