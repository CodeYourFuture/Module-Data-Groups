// Implement a function called contains that checks an object contains a
// particular property

// E.g. contains({a: 1, b: 2}, 'a') // returns true
// as the object contains a key of 'a'

// E.g. contains({a: 1, b: 2}, 'c') // returns false
// as the object doesn't contains a key of 'c'


function contains(obj, key) {
    // Ensure obj is an actual object (and not null)
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return false;  // Or throw an error if you prefer
    }
    
    return obj.hasOwnProperty(key);
  }
  
  // Testing the function
  console.log(contains({a: 1, b: 2}, 'a')); // returns true
  console.log(contains({a: 1, b: 2}, 'c')); // returns false
  console.log(contains({}, 'a'));            // returns false (empty object)
  console.log(contains(null, 'a'));          // returns false (invalid object)
  console.log(contains(undefined, 'a'));    // returns false (invalid object)
  console.log(contains(["a", "b", "c", 1, 2, 4])); // return false (array)
  

module.exports = contains;