// Refactor the implementation of includes to use a for...of loop

const includes = (list, target) =>{
  for (item of list)
      if ( item == target ) return true;
  return false; 
}

module.exports = includes;
