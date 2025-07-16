function createLookup(arrayCountryCurrency) {
  const obj = {}
  for(let [key, value] of arrayCountryCurrency){
    obj[key] = value;
  };
  
  return obj;

  
  // this is a shorter way for the same result 
  // return Object.fromEntries(arrayCountryCurrency)
}

module.exports = createLookup;
