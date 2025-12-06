function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("="); // find the first =
    if (index === -1) continue;      // skip if no =
    
    const key = pair.substring(0, index);       // before the =
    const value = pair.substring(index + 1);    // after the =
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
