// Refactor the implementation of includes to use a for...of loop

// function includes(list, target) {
//  for (let index = 0; index < list.length; index++) {
//   const element = list[index];
//   if (element === target) {
//   return true;
//    }
//  }
//  return false;
//  }

// module.exports = includes;


/*

I refactored the includes function by changing the for loop to a for...of loop.
Originally, the function used a standard for loop with an index to go through the array. 
I replaced that with a for...of loop, which lets me loop directly over each element in the list.
The logic stayed the same — I checked if the current element matches the target, and returned true if it did. 
If the loop finishes without finding a match, the function returns false.
After making this change, I ran all the tests in includes.test.js, and they all passed. 
This shows the function still works correctly after the refactor.

*/

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
