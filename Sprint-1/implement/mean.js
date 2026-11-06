function calculateMean(list) {
    let total = 0;
    for (const item of list) {
         total = total + item;    
    }
    return Number(total.toFixed(2)) / list.length;
}
console.log(n));
module.exports = calculateMean;

//E.g. calculateMean([1, 2, 6]), target output: 3
//E.g. calculateMean([]) throws Error("calculateMean requires a non-empty array")
//E.g. calculateMean("banana") throws Error("calculateMean requires an array of numbers")