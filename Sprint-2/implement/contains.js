const object = {};
object.name = "Tayle";

function contains(object, prop) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return false;
  }
  return object.hasOwnProperty(prop);
}

console.log(contains(object, "name"));
module.exports = contains;
