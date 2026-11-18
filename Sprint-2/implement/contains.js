function contains(cont, str) {
  // if (cont === "") {
  //   return false;
  // }
  if (typeof cont !== "object" || cont === null || Array.isArray(cont)) {
    throw new Error("contains requires an object");
  }

  const keyArray = Object.keys(cont);
  for (const item of keyArray) {
    if (item === str) {
      return true;
    }
  }
  return false;
}
module.exports = contains;
