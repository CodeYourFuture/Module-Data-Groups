
function createLookup(countryCurrArray) {
    if (
      !Array.isArray(countryCurrArray) ||
      !countryCurrArray.every((item) => Array.isArray(item))
    ) {
      return null;
    } 
    return Object.fromEntries(countryCurrArray);
  
 
}

module.exports = createLookup;