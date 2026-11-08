function contains(objIn, property) {
  if (Array.isArray(objIn) || objIn === null || typeof objIn !== "object") {
    throw new Error("contains requires an object");
  }

  for (const key in objIn) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
