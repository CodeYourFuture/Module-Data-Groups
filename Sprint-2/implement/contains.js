function contains(obj, key) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false;
}
//return key in obj;
return Object.hasOwn(obj, key);

}

module.exports = contains;

// In contains.js function implemented and tested. 

  let obj = {}, propertyName = "toString";
  console.log( propertyName in obj );                // true
  console.log( Object.hasOwn(obj, propertyName) );   // false

  // In contains.js modified return function as return Object.hasOwn(obj, key);