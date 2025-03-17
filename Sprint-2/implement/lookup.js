const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
function createLookup(country) {
  let object ={};
  country.forEach(element => {
    object[element[0]]= element[1];
    
  });
  return object;

  }

console.log(createLookup(countryCurrencyPairs));
module.exports = createLookup;

