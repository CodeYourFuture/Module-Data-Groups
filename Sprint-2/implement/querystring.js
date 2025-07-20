function parseQueryString(queryString) {
  const queryParams = {};

  // Return empty object if input is not a string
  if (typeof queryString !== "string") {
    return queryParams;
  }

  // Strip everything before "?" if it's a full URL
  const queryStart = queryString.indexOf("?");
  if (queryStart !== -1) {
    queryString = queryString.slice(queryStart + 1);
  }

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // Skip empty strings caused by trailing &

    const [rawKey, ...rest] = pair.split("=");
    const rawValue = rest.join("=");

    // Handle missing "=" as empty value (e.g., "key" becomes key: "")
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue || "");

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
