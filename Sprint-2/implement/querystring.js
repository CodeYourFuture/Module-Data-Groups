function parseQueryString(queryString) {
  const queryParams = {};
  
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  // Helper to decode '+' as spaces and percent-encoded characters
  function decodeParam(str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
  }

  // Split by '&' to get raw key-value pairs
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Ignore empty pairs caused by trailing or duplicate '&' (e.g. "a=1&&b=2&")
    if (pair.length === 0) {
      continue;
    }

    let rawKey, rawValue;
    const equalIndex = pair.indexOf("=");

    if (equalIndex === -1) {
      // Key with no '=' (e.g., "key") -> value is empty string
      rawKey = pair;
      rawValue = "";
    } else {
      // Split on the FIRST '=' only (handles values containing '=', e.g. "a=b-2")
      rawKey = pair.slice(0, equalIndex);
      rawValue = pair.slice(equalIndex + 1);
    }

    const key = decodeParam(rawKey);
    const value = decodeParam(rawValue);

    // Stretch Goal: Handle duplicate keys by converting to an array
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
