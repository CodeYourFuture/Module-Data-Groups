function contains(obj, key) {
   if (typeof obj !== "object" || obj === null) {
    return false;
  }

  // Check if the key exists in the object
  if (obj.hasOwnProperty(key)) {
    return true;
  } else {
    return false;
  }
}

 

module.exports = contains;


