function contains(toCheck, input) {
  if (
    typeof toCheck !== "object" ||
    Array.isArray(toCheck) ||
    toCheck === null
  ) {
    return false;
  }

  for (const key in toCheck) {
    if (key === input) {
      return true;
    }
  }

  return false;
}

console.log(contains({ a: 1, b: 2 }, "a"));

module.exports = contains;
