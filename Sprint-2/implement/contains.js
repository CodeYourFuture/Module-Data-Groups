function contains(obj, propertyName) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj) ||
    Object.keys(obj).length === 0
  ) {
    throw new Error("Invalid object");
  }
  
  if (Object.keys(obj).includes(propertyName)) {
    return true;
  }
  return false;
}


module.exports = contains;
