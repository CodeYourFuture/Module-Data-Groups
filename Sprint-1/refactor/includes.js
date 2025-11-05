// Refactor the implementation of includes to use a for...of loop

// "use strict";
const includes = (list, target) =>{
  for (const item of list)
      if ( item == target ) return true;
  return false; 
}

console.log(includes([1,2,3,4,5], 3));
module.exports = includes;
