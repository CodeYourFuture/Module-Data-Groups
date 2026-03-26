function contains(elements, itemKey) {
  if (Object.keys(elements).length === 0) {
    console.log(false);
    return false;
  }

  if (typeof elements !== "object" || Array.isArray(elements)) {
    console.log(false);
    return false;
  }
  for (const key in elements) {
    if (key === itemKey) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

module.exports = contains;
