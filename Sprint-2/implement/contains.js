function contains(obj, k) {
    if (
      Array.isArray(obj) ||
      typeof obj !== "object" ||
      obj === null ||
      Object.keys(obj).length === 0
    ) {
      return false;
    } else {
      for (const key of Object.keys(obj)) {
        if (key === k) {
          return true;
        }
      }
    }
    return false
}

module.exports = contains;
