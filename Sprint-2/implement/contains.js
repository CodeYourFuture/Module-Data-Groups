function contains(object, propertyName) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    throw new Error("It is a invalid object");
  }
  const newArray = Object.keys(object);
  for (let item of newArray) {
    if (item === propertyName) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
