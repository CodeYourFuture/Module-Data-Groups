function parseQueryString(queryString) {
  const queryParams = {};
  // Remove the leading '?' if it exists and extract only the query part
  const queryStart = queryString.indexOf("?");
  if (queryStart !== -1) {
    queryString = queryString.slice(queryStart + 1);
  }
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    if (queryParams.hasOwnProperty(key)) {
      if (!Array.isArray(queryParams[key])) {
        queryParams[key] = [queryParams[key]];
      }
      queryParams[key].push(value);
    } else {
    queryParams[key] = value;
    }
  }

  return queryParams;
}


module.exports = parseQueryString;
