function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(/=(.*)/); // We use regex to split only at first.
    queryParams[key] = value;

  }

  return queryParams;
}
   console.log(parseQueryString("A="));
   console.log(decodeURIComponent("id%3D5"));

module.exports = parseQueryString;
