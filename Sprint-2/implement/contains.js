function contains(obj, prop) {
 return (
   !!obj && // confirm that obj is not null or undefined. If undefined or null, return false.
   typeof obj === "object" && // confirm that obj is an object. If not an object, return false.
   !Array.isArray(obj) && // confirm that obj is not an array. If an array, return false.
   Object.hasOwnProperty.call(obj, prop)// check if the object has the property. If it does, return true; otherwise, return false.
 );
}

module.exports = contains;
