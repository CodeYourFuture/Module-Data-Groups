function contains(obj, property) {
//return false if object is empty
  if(Object.keys(obj).length === 0){
    return false;
  }
//throw error if parameters are invalid
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    throw new Error("Not a valid input");
  }
  //check that the obj contains a property, and the property is not inherited.
  //N:B Object.hasOwn() strictly check for own properties and not inherited ones.
  if (Object.hasOwn(obj, property)) {
    return true;
  } else {
    return false;
  }
}

// console.log(contains({ a: 1, b: 2 }, "a"));
// console.log(contains({ a: 1, b: 2 }, "c"));
// console.log(contains({}, "c"))
// console.log(contains([], "c"))

module.exports = contains;
