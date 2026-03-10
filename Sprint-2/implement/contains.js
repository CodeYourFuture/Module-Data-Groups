function contains(obj, prop) {
 return (
   !!obj &&
   typeof obj === "object" &&
   !Array.isArray(obj) &&
   Object.prototype.hasOwnProperty.call(obj, prop)
 );
}

module.exports = contains;
