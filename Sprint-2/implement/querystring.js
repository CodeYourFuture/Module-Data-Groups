function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("="); // Split only on the first "="
    const value = valueParts.join("="); // Joins back the remaining value if it contained "="

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
