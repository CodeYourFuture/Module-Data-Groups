function contains(elements, itemKey) {
  if (!elements) return false;
  if (Object.getOwnPropertyNames(elements).length === 0) {
    return false;
  }

  if (typeof elements !== "object" || Array.isArray(elements)) {
    return false;
  }
  for (const key in elements) {
    if (key === itemKey) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
