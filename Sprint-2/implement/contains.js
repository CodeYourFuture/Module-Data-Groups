function contains(obj, prop) {
    if (Array.isArray(obj)) {
        return false; // returns false if an object contains an array
    }
  return obj.hasOwnProperty(prop);
}
