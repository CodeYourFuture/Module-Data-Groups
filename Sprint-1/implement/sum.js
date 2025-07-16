function sum(elements) {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    let value = elements[i];
    if (typeof value === 'number' && !isNaN(value)) { // Check if the value is a number
      total = total + value;
    }
  }
  return total;
}

console.log(sum([10, 20, 30])); // 60
console.log(sum(['hey', 10, 'hi', 60, 10])); // 80
console.log(sum([])); // 0  
// Given an empty array, returns 0
console.log(sum([42])); // 42
// Given an array with just one number, returns that number
console.log(sum([-10, -20, 30])); // 0
// Given an array containing negative numbers, returns the correct total sum
console.log(sum([1.5, 2.5, 3.5])); // 7.5
// Given an array with decimal/float numbers, returns the correct total sum
console.log(sum(['a', 'b', 10, 20])); // 30
// Given an array containing non-number values, ignores non-numerical values and returns the sum of numerical elements
console.log(sum(['a', 'b'])); // 0        
// Given an array with only non-number values, returns 0
console.log(sum([null, undefined, 'text'])); // 0 
// Given an array with only non-number values, returns 0  


module.exports = sum;
