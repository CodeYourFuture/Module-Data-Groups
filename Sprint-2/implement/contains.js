function contains(obj, prop) {
  return obj.hasOwnProperty(prop); // checks if the property exists in the object and returns true or false
}

module.exports = contains;
