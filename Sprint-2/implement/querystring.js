function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue; 
    const index = pair.indexOf("=");

    if (index === -1) {
      queryParams[pair] = "";
      continue;
    }
    const key = pair.slice(0, index);
    const value = pair.slice(index + 1);
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

