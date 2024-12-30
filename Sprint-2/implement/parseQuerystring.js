function parseQueryString(queryString) {
  // Validate input
  if (typeof queryString !== "string" || queryString.length === 0) {
    return {};
  }

  const queryParams = {};
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split the pair into key and value, capturing the entire value after the first "="
    const [key, ...values] = pair.split("=");
    const value = values.join("="); // Rejoin the remaining parts if there were multiple "="

    // Decode URL-encoded characters
    const decodedKey = decodeURIComponent(key);
    const decodedValue = value ? decodeURIComponent(value) : "";

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

  return queryParams;
}

module.exports = parseQueryString;
