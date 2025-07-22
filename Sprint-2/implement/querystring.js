function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const seperatorIndex = pair.indexOf("=");

    let key, value;
    if (seperatorIndex === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, seperatorIndex));
      value = decodeURIComponent(pair.slice(seperatorIndex + 1));
    }

    if (queryParams.hasOwnProperty(key)) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value); // Already an array, just push new value
      } else {
        queryParams[key] = [queryParams[key], value]; // Convert to array
      }
    } else {
      queryParams[key] = value; // First time seeing this key
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
