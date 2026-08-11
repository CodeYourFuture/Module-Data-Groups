function contains(keyInput, valueInput) {
  if (
    keyInput == null ||
    typeof keyInput !== "object" ||
    Array.isArray(keyInput)
  ) {
    return false;
  } else {
    for (const key in keyInput) {
      if (key == valueInput) {
        return true;
      }
    }
  }
  return false;
}
// make values like null, undefined ,1234, true,"Abc" to be consider invalid and return false same as array
module.exports = contains;
