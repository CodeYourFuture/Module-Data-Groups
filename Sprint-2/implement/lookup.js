function createLookup(param) {
  //takes an iterable parameter and turns it in to an object
  const obj=Object.fromEntries(param)
  return obj
}
// console.log(createLookup([['US','USD']]));
// console.log(createLookup([["US", "USD"], ["CA", "CAD"], ["name", "alex"]]));



module.exports = createLookup;
