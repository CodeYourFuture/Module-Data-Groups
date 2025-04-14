

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(/=(.*)/);
    queryParams[key] = value;
  }

  return queryParams;
}

// parseQueryString("equation=x=y+1")

// Object {
//   -   "equation": "x=y+1", 
//   +   "equation": "x", 

//"equation=x=y+1" 
// equation": "x=y+1 

module.exports = parseQueryString;
