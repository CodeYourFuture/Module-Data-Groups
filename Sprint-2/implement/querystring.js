// start your function;
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  // URLSearchParams is a built-in JavaScript object that can read query strings.
  const params = new URLSearchParams(queryString); // params stores the query string internally as key-value pairs.
  for (let pair of params) {
    let key = pair[0];
    let value = pair[1];
    queryParams[key] = value.replace(/ /g, "+");
  }
  return queryParams;
}
let queryString = "equation=x=y+1";

module.exports = parseQueryString;

// Notice: ===>  URLSearchParams is a class, not a plain function.
// Classes in JS must be called with new.
// new URLSearchParams(...) → creates a new instance (object) of the class.
// That instance knows how to store and iterate key-value pairs.
// URLSearchParams decodes URL-encoded characters, and in query strings, a + represents a space. and this is why we need .replace(/ /g, "+");
