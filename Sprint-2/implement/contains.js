function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
}
return key in obj;

}

module.exports = contains;

// In contains.js function implemented and tested. 
