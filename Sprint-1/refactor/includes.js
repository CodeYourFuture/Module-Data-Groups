function includes(list, target) {
  for (const item of list) {
    if (item === target) return true;
  }
  return false;
}

module.exports = includes;
