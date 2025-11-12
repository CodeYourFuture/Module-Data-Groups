//function parseQueryString(queryString) {
  ///We first need to separate out the "fruit=banana" string so we can access "fruit" and "banana" separately.
  //  We can do this by splitting up the string by the = character.
  // We can split the string into an array consisting of ['fruit', 'banana'].
  // Then we can grab the array's contents and assign the elements meaningful names:
//   const queryParams = {};

//   const keyValuePair = queryString.split("=");
//   const key = keyValuePair[0];
//   const value = keyValuePair[1]; // value will hold 'banana'

  ///const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'



//   queryParams[key] = value; // Fixed: use bracket notation to use the variable as key
//   return queryParams;
// }


// // in case of multible pairs we are missing one step  - breaking up the string of multiple key-value pairs
// //  into an array where each element is a single key-value pair. If we do this, 
// // then we can iterate over the array, and do what we already know how to do on each key-value pair.
// function parseQueryString(queryString) {
//   // assume queryString has a value of "sort=lowest&colour=yellow"
//   const queryParams = {};
//   const keyValuePairs = queryString.split("&"); // keyValuePairs will point to ["sort=lowest", "colour=yellow"]

//   for (const pair of keyValuePairs) {
//     const [key, value] = pair.split("=");
//     queryParams[key] = value;
//   }

//   return queryParams;
// }
// module.exports = parseQueryString;

//Now that we’ve worked out how to solve this problem in the case of multiple query parameters, 
// let’s integrate that solution into our previous implementation, to make sure it works for all cases.

//We can keep our if (queryString.length === 0) 
// { check from before. We still need it because split on an empty string still returns an empty string. 
// If we don’t have this special case, we’ll try to parse the empty string, probably incorrectly.

//We don’t need to do anything special for the one-value case,
//  as an array containing one element gets iterated the same as an array of multiple elements:
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
 module.exports = parseQueryString;
