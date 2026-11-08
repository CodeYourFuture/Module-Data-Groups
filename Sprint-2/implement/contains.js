function contains(objIn, property) {
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
