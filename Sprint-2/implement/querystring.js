function parseQueryString(queryString) {
  //   //function parseQueryString(queryString) {
  //   const queryParams = {};
  //   if (queryString.length === 0) {
  //     return queryParams;
  //   }
  //   const keyValuePairs = queryString.split("&");

  //   for (const pair of keyValuePairs) {
  //     const [key, value] = pair.split("=");
  //     queryParams[key] = value;
  //   }

  //   return queryParams;
  // }

  const queryParams = {}; // created an empty object to store key-value pairs
  if (queryString.length === 0) {
    // implemented if the query string is empty, return an empty object
    return queryParams;
  }

  const keyValuePairs = queryString.split("="); // created a variable to split the query string by "="
  //Output= ["equation", "x" "y+1"]

  const [key, ...value] = keyValuePairs; // implemented a destructuring assignment to separate key and value. and after executing this line the output is ["equation", "x" "y+1"]
  const valueName = value.join("="); // created a new variable to join the remaining elements of the array into a single string.
  // the output ["equation", "x=y+1"]

  queryParams[key] = valueName; // implemented to add the key-value pair to the object.
  //Output= {equation: "x=y+1"}

  return queryParams; // returned the object containing the key-value pair..
}

module.exports = parseQueryString;
