function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip completely empty segments from '&&' or trailing '&'
    if (!pair) continue;

    // 2. Split on '=' separating key and value
    const eqIndex = pair.indexOf("=");
    let rawKey, rawValue;

    if (eqIndex === -1) {
      // Key with no '=' (e.g. "key")
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, eqIndex);
      rawValue = pair.slice(eqIndex + 1);
    }

    // 3. Replace '+' with ' ' first, then decode URL percent-encoded values
    const key = decodeURIComponent(rawKey.replace(/\+/g, " "));
    const value = decodeURIComponent(rawValue.replace(/\+/g, " "));

    // 4. Handle identical keys (stretch goal)
    if (queryParams.hasOwnProperty(key)) {
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
