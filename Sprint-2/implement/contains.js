function contains(object, property) {
  if (object === null || typeof object !== "object" || Array.isArray(object))
    throw new Error("Input is not a valid object");
  else return Object.hasOwn(object, property);
}
module.exports = contains;
