/*In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/


function sum(elements) {
    let filtered = elements.filter(el => typeof el === "number")
    if (filtered.length === 0) {
        return 0
    }
    if (filtered.length === 1) {
        return elements[0]
    }
      
   let max = filtered.reduce((total,currentVal)=> total+currentVal,0)
   return max
}
console.log(sum(["text", true, null, undefined]));
module.exports = sum;
