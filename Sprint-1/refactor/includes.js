function includes(list, target) {
  // handle non-array safely (optional but solid)
  if (!Array.isArray(list)) {
    return false;
  }

  for (const element of list) {
    if (element === target) {
      return true;
    }
  }

  return false;
}

module.exports = includes;