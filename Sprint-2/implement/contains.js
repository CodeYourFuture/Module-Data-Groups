function contains(object, target) {
  for (let index = 0; index < Object.keys(object).length; index++) {
    if (Object.keys(object).includes(target)) {
      return true;
    }
  }
  return false;
}
module.exports = contains;
