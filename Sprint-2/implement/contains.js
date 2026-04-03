function contains(elements, itemKey) {
  if (!elements) return false;
  if (typeof elements !== "object" || Array.isArray(elements)) {
    return false;
  }
  if (Object.hasOwn(elements, itemKey)) {
    return true;
  }

  return false;
}

module.exports = contains;
