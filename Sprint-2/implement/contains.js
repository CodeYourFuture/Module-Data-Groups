function contains(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// Or we can use `for ...in loop to check for the property
// function contains(obj, prop) {
//   for (const key in obj){
//    if (key === prop) return true;
//   }
//   return false;
// }

console.log(contains({ a: 1, b: 2 }, "a")); // true
console.log(contains({ a: 1, b: 2 }, "c")); // false

module.exports = contains;
