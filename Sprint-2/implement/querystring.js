function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [encodedKey, ...valueParts] = pair.split("="); 
    if (!encodedKey) continue;

    const key = decodeURIComponent(encodedKey);
    const value = decodeURIComponent(valueParts.join("=") || "");

    if (queryParams[key]) {
      queryParams[key] = [].concat(queryParams[key], value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
