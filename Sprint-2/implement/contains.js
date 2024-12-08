function contains(obj,prop) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false;
    }
    if(typeof prop!=="string")
        return false;
  return obj.hasOwnProperty(prop);
}

module.exports = contains;
