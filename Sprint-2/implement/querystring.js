function parseQueryString(queryString) {
  const queryParams = {};

  // 1. Input Validation: Return empty object for non-string, null, or empty input.
  if (typeof queryString !== "string" || !queryString) {
    return queryParams;
  }

  // Remove leading '?' if it exists (e.g., if passed directly from window.location.search)
  const cleanedString = queryString.startsWith("?")
    ? queryString.substring(1)
    : queryString;

  const keyValuePairs = cleanedString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) continue; // Skip empty pairs

    const separatorIndex = pair.indexOf("=");
    let key;
    let value;

    if (separatorIndex === -1) {
      // Case 1: Key with no equals sign (e.g., "key")
      key = pair;
      value = "";
    } else {
      // Case 2: Key/value pair with or without extra '=' in value (e.g., "eq=a=b")
      key = pair.substring(0, separatorIndex);
      // Value is everything after the first '='
      value = pair.substring(separatorIndex + 1);
    }

    // Decode the key and value
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    // Handle Duplicate Keys: If the key already exists, convert the value to an array.
    if (queryParams.hasOwnProperty(decodedKey)) {
      if (Array.isArray(queryParams[decodedKey])) {
        queryParams[decodedKey].push(decodedValue);
      } else {
        // Convert existing value and new value to an array
        queryParams[decodedKey] = [queryParams[decodedKey], decodedValue];
      }
    } else {
      // Assign the value for the first time
      queryParams[decodedKey] = decodedValue;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
