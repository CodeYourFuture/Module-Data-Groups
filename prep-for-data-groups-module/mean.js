/*
Let’s consider a problem where we calculate the mean of a list of numbers.
Given an array of numbers
When we call calculateMean with the array of numbers
Then we get the mean.
 */

function calculateMean(list){
  let total = 0;

  for(const item of list){
    total += item/list.length
  }
  return total;
}

console.log(calculateMean([3, 50, 7]));
console.log(calculateMean([3, 10, 7,20]));

module.exports = calculateMean;
