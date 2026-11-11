function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }

    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");

    const decodedKey = decodeURIComponent(key.replace(/\+/g, " "));
    const decodedValue = decodeURIComponent(value.replace(/\+/g, " "));

    if (decodedKey in queryParams) {
      if (Array.isArray(queryParams[decodedKey])) {
        queryParams[decodedKey].push(decodedValue);
      } else {
        queryParams[decodedKey] = [queryParams[decodedKey], decodedValue];
      }
    } else {
      queryParams[decodedKey] = decodedValue;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
