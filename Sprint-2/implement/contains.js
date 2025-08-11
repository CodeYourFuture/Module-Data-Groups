const contains = (object, prop) => {
  //additional test
  //null, undfined and array check
  if (object === null || object === undefined || object instanceof Array) {
    return false;
  }

  // check if the object is empty
  if (Object.keys(object).length === 0) {
    return false;
  }

  if (object.hasOwnProperty(prop)) {
    return true;
  } else {
    return false;
  }
};

module.exports = contains;
