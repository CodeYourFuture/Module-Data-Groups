function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // ignore empty pairs

    const index = pair.indexOf("=");

    let rawKey, rawValue;

    if (index === -1) {
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, index);
      rawValue = pair.slice(index + 1);
    }

    // Replace '+' with space
    rawValue = rawValue.replace(/\+/g, " ");
    rawKey = rawKey.replace(/\+/g, " ");

    // Decode percent-encoding
    rawKey = decodeURIComponent(rawKey);
    rawValue = decodeURIComponent(rawValue);

    const key = rawKey;
    const value = rawValue;

    // Handle repeated keys → array
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
console.log(parseQueryString("key=value1&key=value2&key=value3&foo=bar"));

module.exports = parseQueryString;
