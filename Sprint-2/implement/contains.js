function contains(object, propertyName) {
  if(Object.prototype.toString.call(object) !== "[object Object]") {
    // if user passes something that is not an object, then throw an error. 
    throw new Error("not an object")
  }
    return Object.hasOwn(object, propertyName);
}

module.exports = contains;
