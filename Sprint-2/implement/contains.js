function contains(obj, property) {
  try {
    const keys = Object.keys(obj);
    return keys.includes(property);
  } catch (error) {
    throw new Error("The parameter given is not a plain JS object.");
  }
}

module.exports = contains;
