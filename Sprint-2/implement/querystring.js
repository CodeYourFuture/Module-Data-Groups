function parseQueryString(queryString) {
  const queryParams = {};

  // Return empty object if query string is empty
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split query string into key-value pairs
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Find the first "=" to split into key and value
    const equalIndex = pair.indexOf("=");

    let key, value;
    if (equalIndex === -1) {
      // If there's no "=", treat the entire pair as the key with a null value
      key = pair;
      value = null;
    } else {
      // Split into key and value
      key = pair.substring(0, equalIndex);
      value = pair.substring(equalIndex + 1);
    }

    // Skip if key is empty
    if (key) {
      // Decode key, replacing "+" with spaces
      const decodedKey = decodeURIComponent(key.replace(/\+/g, " "));

      // Decode value, but do not replace "+" with spaces
      const decodedValue = value ? decodeURIComponent(value) : null;

      // Handle duplicate keys by storing values in an array
      if (queryParams.hasOwnProperty(decodedKey)) {
        if (Array.isArray(queryParams[decodedKey])) {
          queryParams[decodedKey].push(decodedValue);
        } else {
          queryParams[decodedKey] = [queryParams[decodedKey], decodedValue];
        }
      } else {
        queryParams[decodedKey] = decodedValue;
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;