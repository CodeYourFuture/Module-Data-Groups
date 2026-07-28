function contains(object, target) {
  for (let index = 0; index < Object.keys(object).length; index++) {
    const element = Object.keys(object)[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}
module.exports = contains;
