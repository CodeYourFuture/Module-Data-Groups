// Refactor the implementation of includes to use a for...of loop
// so the original function uses for loop with an index, but we are tasked to rewrite it with for...of loop, the for ..of loop will iterate values in array instead of indices 

// function includes(list, target) {// this is the original function 
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return true;
//     }
//   }
//   return false;
// }

// refactored function
function includes(list, target){
  for (const element of list){// element is each item in the array
    if (element === target){
      return true;// is the element matches the target, returns true
    }
  }
  return false;// if there is no match after the loop is complete, it returns false
}
module.exports = includes;
