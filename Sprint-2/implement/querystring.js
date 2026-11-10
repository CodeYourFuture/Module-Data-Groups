function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // Ignore empty pairs

    const index = pair.indexOf("=");
    let rawKey, rawValue;

    if (index === -1) {
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, index);
      rawValue = pair.slice(index + 1);
    }

    // Helper to decode URI components and replace '+' with spaces
    const decode = (str) => {
      try {
        return decodeURIComponent(str.replace(/\+/g, " "));
      } catch (e) {
        return str.replace(/\+/g, " ");
      }
    };

    const key = decode(rawKey);
    const value = decode(rawValue);

    // Handle duplicate keys by storing multiple values in an array
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
