function contains(object, property) {// the function constains takes in two parameters: object and property
  // Check if the first argument is an object (and not null)
  if (typeof object !== 'object' || object === null) {//typeof object !== 'object' to check if the object is not of type object. Additionally, we check if the object is not null because typeof null also returns 'object', which is misleading.
    return false;//f the object is not an object (like a string, number, etc.), we immediately return false.

  }
  return property in object;// in operator, property in object checks if the property exists in object, if it does,  it returns true, otherwise it's false
}

module.exports = contains;
