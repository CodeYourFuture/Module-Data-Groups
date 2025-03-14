function contains(obj, key) {
  if (typeof obj !== `object` || Array.isArray(obj)) return false;
  const objKeys = Object.keys(obj);
  return objKeys.some((element) => element === key);
}

module.exports = contains;
