function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString === null || queryString === undefined) {
    return queryParams;
  }
  if (typeof queryString !== "string") {
  return queryParams;
}

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Ignore empty pairs
    if (pair === "") {
      continue;
    }

    // Split only on the first "="
    const [keyPart, ...valueParts] = pair.split("=");

    let key = keyPart;
    let value = valueParts.join("=");

    // If there is no "=" the value should be empty
    if (valueParts.length === 0) {
      value = "";
    }

    // Replace + with spaces and decode URL encoding
    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));

    // Handle duplicate keys
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
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
