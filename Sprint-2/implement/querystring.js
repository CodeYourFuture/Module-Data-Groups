function parseQueryString(queryString) {
  const queryParams = Object.create(null);

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

    if (Object.hasOwn(queryParams, decodedKey)) {
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
