function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");
    const newvalue = value.join("="); 
    queryParams[key] = newvalue;

  }

  return queryParams;
}

module.exports = parseQueryString;
