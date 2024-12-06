//E.g. sum([10, 20, 30]), target output: 60
//E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
// Other methods we can use to sum are: for loop, reduce, forEach() and for...of loop


function sum(elements) {
  const numbers = elements.filter(ele => typeof ele === "number" && !Number.isNaN(ele));
  
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  numbers.forEach((el) => (sum += el));
 
  return sum;
}

 console.log(sum([5, 20, 15]));              // Result 40
 console.log(sum([5]))                       // Result 5
 console.log(sum([10, -5, 15, -10]))         // Result 10
 console.log(sum([10.5, 20.3, -5.2, 5]))     // Result 30.6 
 console.log(sum(['hey', 10, 'hi', 60, 10])) // Result 80
 console.log(sum(['hey', 'hi', 'world']))    // Result 0

// some logs after feedback
console.log(sum([Infinity, 1]));         // Expected result: Infinity
console.log(sum([Infinity, Infinity]));  // Expected result: Infinity
console.log(sum([NaN, 1]));              // Expected result: 1
console.log(sum([Infinity, -Infinity])); // Expected result: NaN
console.log(sum([1.1, 1.1, 1.1])); // result = 3.3


// Second method can be used its recommended

// function sum(elements) {
//     const numbers = elements.filter((el) => typeof el === "number");
//     return numbers.reduce((acc, el) => acc + el, 0);
//   }
  
//   console.log(sum([5, 20, 15])); // Expected output: 40
  

module.exports = sum;
