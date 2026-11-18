function contains(input, key) {
  if (input === null || Array.isArray(input) || typeof input !== "object") {
    throw new Error("contains requires an object");
  } else {
    for (const keys in input) {
      if (keys === key) {
        return true;
      }
    }
  }
  return false;
}
module.exports = contains;
