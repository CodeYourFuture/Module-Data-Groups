function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
      }
    
      const result = {};
    
      // Loop through the array and count each item
      arr.forEach(item => {
        result[item] = (result[item] || 0) + 1;
      });
    
      return result;
    
}

// Test 1: empty array
console.log(tally([])); // Expected output: {}

// Test 2: array with a single item
console.log(tally(['a'])); // Expected output: { a: 1 }

// Test 3: array with multiple duplicate items
console.log(tally(['a', 'a', 'a'])); // Expected output: { a: 3 }

// Test 4: array with multiple unique items
console.log(tally(['a', 'a', 'b', 'c'])); // Expected output: { a: 2, b: 1, c: 1 }


module.exports = tally;
