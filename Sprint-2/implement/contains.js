function contains(object, result) {
  const isPlainObject =
    typeof object === "object" && object !== null && !Array.isArray(object);

  if (!isPlainObject) {
    throw new Error("contains require an object");
  }
  for (const key in object) {
    if (key === result) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
