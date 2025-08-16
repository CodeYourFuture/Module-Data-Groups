function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (let i = 0; i < keyValuePairs.length; i++) {
    const pair = keyValuePairs[i];
    const equalIndex = pair.indexOf("=");

    let key, value;

    if (equalIndex === -1) {
      key = pair;
      value = "";
    } // if no "=" is found key is assigned with a value of empty string
    else {
      key = pair.substring(0, equalIndex);
      value = pair.substring(equalIndex + 1);
    } // Split into key and value for as many "=" in the value using substring

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
