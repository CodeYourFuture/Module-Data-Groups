function contains(objIn, property) {
  if (Array.isArray(objIn)) {
    throw new Error("contains requires an object");
  }

  for (const key in objIn) {
    if (key === property) {
      return true;
    }
  }
  return false;
}
// if (Object.keys(objIn).length === 0 && property !== "") {
//   return false;
// }
// return true;

module.exports = contains;
