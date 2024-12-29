/*function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams[key] = value;

  return queryParams;
}*/

/*function parseQueryString(queryString) {
  const queryParams = {};

  const keyValuePair = queryString.split("=");
  const key = keyValuePair[0]; // key will hold 'fruit'
  const value = keyValuePair[1]; // value will hold 'banana'
  queryParams.key = value;

  return queryParams;
}*/

/*function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}*/

function parseQueryString(queryString) {
  const queryParams = {}; //This will store the key-value pairs from the query string.
  if (queryString.length === 0) {
    return queryParams; //If the input string is
    //empty (""), we return the empty object right away because there are no query parameters to process.
  }
  const keyValuePairs = queryString.split("&"); //split("&") to break the query string
  // into smaller parts, separating them at every &.

  //The for loop processes each pair in the array, such as "name=John".
   for (const pair of keyValuePairs) {
     const [key, value] = pair.split("="); //Split Each Pair: pair.split("=")
     //breaks the string into key and value
     queryParams[key] = value; //queryParams[key] = value stores the key-value
     //pair in the queryParams object.After the loop finishes, queryParams contains
     // all the key-value pairs, and the function returns it.
   }

  return queryParams;
}

module.exports = parseQueryString;
