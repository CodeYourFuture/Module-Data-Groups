let a= [3,5,7,9,10]
let result= Math.max(...a)
console.log (result)


function findMax(elements) {
}
function findMax(elements) {
  let max = elements[0]; // Start with the first element as the largest
  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > max) {
      // If the current element is larger
      max = elements[i]; // Update max to this new value
    }
  }
  return max; // Return the largest value found
}

const elements = [3, 5, 9, 1];
console.log(findMax(elements));

module.exports = findMax;

/*Input:

elements is an array, such as [3, 7, 2, 9, 4].
Step 1: Initialize the max variable:

The first element of the array (elements[0]) is assumed to be the largest for now.
In the example [3, 7, 2, 9, 4], max starts as 3.
Step 2: Loop Through the Array:

The for loop starts at the second element (i = 1) and compares each element with the current max value.
If a larger value is found, max is updated.
Step 3: Compare Each Element:

Here’s what happens during each iteration:
First iteration (i = 1): Compare 7 with 3. Since 7 > 3, update max to 7.
Second iteration (i = 2): Compare 2 with 7. No update since 2 < 7.
Third iteration (i = 3): Compare 9 with 7. Since 9 > 7, update max to 9.
Fourth iteration (i = 4): Compare 4 with 9. No update since 4 < 9.
Step 4: Return the Maximum:

After the loop finishes, max holds the largest value. In this case, 9.
Output:

The function returns 9 as the maximum value.*/