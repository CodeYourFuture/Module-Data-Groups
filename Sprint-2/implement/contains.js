function contains(obj, targetProperty) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    throw new Error("Input should be an object");
  }
  return Object.keys(obj).includes(targetProperty);
}

module.exports = contains;
