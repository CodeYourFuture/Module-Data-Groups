

function createLookup(array) {
  let object = {}
  for (const list of array) {
    console.log(list);
    object[list[0]] = list[1]
  } 
  console.log (object)
  return object

}

//const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD'], ['UA', 'GRN']]
//createLookup(countryCurrencyPairs) 


module.exports = createLookup;
