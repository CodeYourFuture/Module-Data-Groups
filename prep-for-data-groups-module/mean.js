/*
Let’s consider a problem where we calculate the mean of a list of numbers.
Given an array of numbers
When we call calculateMean with the array of numbers
Then we get the mean.
 */
const list = [3,50,7];
function calculateMean(list){
  let total = 0;

  for(const item of list){
    total += item/3
  }
  return total;
}

module.exports = calculateMean;
