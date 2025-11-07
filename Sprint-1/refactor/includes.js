// Refactor the implementation of includes to use a for...of loop

// function includes(list, target) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return true;
//     }
//   }
//   return false;
// }

// module.exports = includes;

function includes(list, target) {
  // for...of loop: goes through each element directly
  // (no need to worry about indexes)
  for (const element of list) {
    // Check if the current element matches our target
    if (element === target) {
      return true; // Found it! Stop searching
    }
  }
  // If we checked all elements and found nothing
  return false;
}

module.exports = includes;