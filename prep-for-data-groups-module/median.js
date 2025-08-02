/*Let’s define another problem.
We want to calculate the median value from an array of numbers.
Given an array of numbers in ascending order
When we call calculateMedian with this array
Then we get the median value.
We calculate the median of a list of numbers by finding the middle value in the list.*/

/*STEPS
1. Find the middle index of an array
2. Get the middle item
3. Return the middle item
*/
function calculateMedian(list) {
  // Line 15 calculates the middle index of an array
  const middleIndex = Math.floor(list.length / 2);
//removes 1 item from the list and our array only have 1 item so we want it thats why we have [0] to get the item in index 0 which is the only item the splice() returns.
  const median = list.splice(middleIndex,1)[0];

  return median;
}
module.exports = calculateMedian;

/*Explaining the above function
- list.length / 2 counts all indexes in the array and divide it by 2  e.g if there are 5 items, it returns 2.5 and then Math.floor rounds it down to 2.
- Math.floor() rounds it down to the nearest whole number.
- splice(middleIndex, 1)[]: returns the item in the middle of the array. because .splice() returns only 1 element in an array, we use [0] to extract that 1 item.
- return median: returns the value that is stored in the median variable.
*/
