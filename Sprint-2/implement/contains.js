function contains(obj, property) {
      
        if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false; 
    }
      
        return property in obj; 
      }

console.log(contains({ a: 1, b: 2 }, "a")); // true
console.log(contains({ a: 1, b: 2 }, "c")); // false
console.log(contains({}, "a")); // false
console.log(contains(null, "a")); // false
console.log(contains([], "length")); // false 
console.log(contains(42, "a")); // false 
console.log(contains("string", "length")); // false 

module.exports = contains;
