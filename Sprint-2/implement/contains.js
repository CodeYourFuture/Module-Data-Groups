function contains(obj, is_property_present) {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return false;
  else if (is_property_present in obj) return true;
  else !obj || typeof obj !== "object";
  return false;
}

module.exports = contains;
