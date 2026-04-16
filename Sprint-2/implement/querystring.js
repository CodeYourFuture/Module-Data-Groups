function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    if (index === -1) continue; // skip pairs with no "="
    const key = pair.slice(0, index);
    const value = pair.slice(index + 1);
    if (key === "") continue; // skip empty keys
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
