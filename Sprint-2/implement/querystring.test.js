// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.
 


function parseQueryString(queryString) {
  const params = {};

  // split the query string by '&' to separate different key-value pairs
  const pairs = queryString.split("&");

  pairs.forEach(pair => {

  // split each into key and value by the first '=' sign

  const{key, value} = pair.split("=").map(decodeURIComponent);

  // if there is more than one '=' symbol, join the rest of the value together
  if (value && value.includes("=")) {
    params[key] = pair.slice(key.length + 1);
  // keep the value intact
  } else {
    params[key] = value || "";
  }
  });

  return params;
}