function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&").filter(Boolean);

  for (const pair of keyValuePairs) {
    const cleanedPair = pair.replace(/\+/g, " ");

    const [rawKey, ...rest] = cleanedPair.split("=");
    const rawValue = rest.length > 0 ? rest.join("=") : "";

    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    if (queryParams.hasOwnProperty(key)) {
      if (!Array.isArray(queryParams[key])) {
        queryParams[key] = [queryParams[key]];
      }
      queryParams[key].push(value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
