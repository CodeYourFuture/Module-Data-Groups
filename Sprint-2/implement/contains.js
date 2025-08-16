function contains(obj,item) {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return false;
  }

  if (typeof item !== 'string') {
    return false;
  } 

  // this checks that the property exists in the object
  return obj.hasOwnProperty(item);
}


module.exports = contains;
