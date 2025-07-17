function contains(obj, property) {

  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      return false;
  }

  return Object.hasOwn(obj, property);
}



// function contains(obj, property) {
      
//         if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
//         return false; 
//     }
      
//         return property in obj; 
//       }

const myObject = { a: 1 };
const myProto = { b: 2 };
Object.setPrototypeOf(myObject, myProto);

console.log("a" in myObject);           // true 
console.log("b" in myObject);           // true
//or
console.log(Object.hasOwn({ a: 1, b: 2 }, "a")); // true
//or
console.log(Object.hasOwn(myObject, "b")); // false   

// console.log(contains({ a: 1, b: 2 }, "a")); // true
// console.log(contains({ a: 1, b: 2 }, "c")); // false
// console.log(contains({}, "a")); // false
// console.log(contains(null, "a")); // false
// console.log(contains([], "length")); // false 
// console.log(contains(42, "a")); // false 
// console.log(contains("string", "length")); // false 

module.exports = contains;
