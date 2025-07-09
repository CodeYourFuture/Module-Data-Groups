
function createLookup(countryCurrArray) {
    if (
      !Array.isArray(countryCurrArray) ||
      !countryCurrArray.every((item) => Array.isArray(item))
    ) {
      return false;
    } 
    return Object.fromEntries(countryCurrArray);
  
 
}

module.exports = createLookup;