function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams; // Return an empty object if the string is empty
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split into key and value at the first '='
    const equalSignPosition = pair.indexOf("=");
    let key, value;

    // Handle cases like "=value" (missing key) or "key=" (missing value)
    if (equalSignPosition === -1) {
      key = decodeURIComponent(pair); // No '=' present, treat whole thing as key
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, equalSignPosition));
      value = decodeURIComponent(pair.slice(equalSignPosition + 1));
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
