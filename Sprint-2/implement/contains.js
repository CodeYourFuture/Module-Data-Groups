function contains(obj, name) {
  if (typeof obj == "object" || obj !== null || Object.keys(obj).length !== 0)
    return Object.hasOwn(obj, name);
}

module.exports = contains;
