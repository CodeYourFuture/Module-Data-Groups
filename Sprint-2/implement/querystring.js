function parseQueryString(queryString) {
  const queryParams = {};

  // Handle invalid input
  if (typeof queryString !== "string" || queryString.length === 0) {
    return queryParams;
  }

  // Remove leading '?' if present
  let cleanedQuery;
  if (queryString.startsWith("?")) {
    cleanedQuery = queryString.slice(1);
  } else {
    cleanedQuery = queryString;
  }

  // Handle empty query string after removing '?'
  if (cleanedQuery.length === 0) {
    return queryParams;
  }

  // Split into key-value pairs
  const keyValuePairs = cleanedQuery.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs
    if (!pair) {
      continue;
    }

    // Split on the first '=' only to handle values containing '='
    const firstEqualIndex = pair.indexOf("=");
    let key, value;

    if (firstEqualIndex === -1) {
      // No '=' in pair, treat as key with undefined value
      key = pair;
      value = undefined;
      queryParams[key] = "";
    } else {
      key = pair.slice(0, firstEqualIndex);
      value = pair.slice(firstEqualIndex + 1);
    }

    // Store in queryParams
    if (key) {
      //  queryParams[key] = value;
      if (value !== undefined) {
        queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
      } else {
        queryParams[decodeURIComponent(key)] = "";
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
