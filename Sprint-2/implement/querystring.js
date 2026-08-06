function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Ignore empty pairs
    if (pair === "") continue;

    const equalIndex = pair.indexOf("=");

    let key;
    let value;

    if (equalIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, equalIndex);
      value = pair.slice(equalIndex + 1);
    }

    // Replace + with spaces and decode URL encoding
    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));

    // Handle duplicate keys
    if (queryParams[key] !== undefined) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
