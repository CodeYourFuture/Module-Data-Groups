// start your function

function contains(object, key) {
  // Reject arrays, null, or non-object types
  if (object === null || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // Safely check if the object has the property
  return Object.prototype.hasOwnProperty.call(object, key);
}

let key = "name";
const object = {
  name: "Roman",
  age: 33,
  city: "Birmingham",
};

module.exports = contains;
