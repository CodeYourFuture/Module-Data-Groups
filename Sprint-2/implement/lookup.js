function createLookup(keyValuePairs) {
  //we are defining a function called createLookup that takes one parameter: pairs, 
  //which should be an array of arrays (like [['US', 'USD'], ['CA', 'CAD']]).

  return Object.fromEntries(keyValuePairs);
/*This line uses the Object.fromEntries() method, which expects an iterable of key-value pairs, and converts it into an object.
createLookup([['US', 'USD'], ['CA', 'CAD']])
{
'US': 'USD',
'CA': 'CAD'
}
*/
}
module.exports = createLookup;
