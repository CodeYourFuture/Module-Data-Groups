function contains(obj, searchKey) {
  if (Array.isArray(obj)) {
    throw new Error("Invalid parameters");
  }
  return Object.keys(obj).includes(searchKey);
}

module.exports = contains;
