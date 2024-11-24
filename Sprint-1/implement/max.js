
// check max in elements E.g. max([30, 50, 10, 40]), target output: 50
// E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

// we can use following methods to find max in a element = map, max and reduce method.

function findMax(elements) {
   const numbers = elements.filter(elements => typeof elements === "number");
   console.log("only numbers", numbers)
   
   if(numbers.length === 0) {
    return -Infinity
   }
   const max = Math.max(...numbers)
   console.log("max", max)
   return max
}

console.log(findMax([])) // result: -Infinity
console.log(findMax([5, 10, 60, 40])) // result: 60
console.log(findMax(['hey', 10, 'hi', 60, 10])) // result: 60 and ignore string "".
console.log(findMax([30, -50, 10, 40])) // Result: 40
console.log(findMax([-30, -50, -10, -40])) // Result: -10
console.log(findMax([30.5, 50.1, 10.3, 40.7])) // Result 50.1
console.log(findMax(['a', 'b', 'c'])) // Result  -Infinity


module.exports = findMax;
