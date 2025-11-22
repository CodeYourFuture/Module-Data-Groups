function contains(obj, find) {

  if(typeof obj !== 'object' || !obj || Array.isArray(obj)) {
    return false;
  }
  return obj.hasOwnProperty(find);
}

module.exports = contains;
