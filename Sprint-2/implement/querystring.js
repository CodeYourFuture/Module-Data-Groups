function parseQueryString(queryString) {
  const params = {};
if (!queryString) {
    return params;
  }

  const pairs = queryString.split("&");
  for (const pair of pairs) {
    if (!pair) continue; // Ignore empty key-value pairs

    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Join back in case value contains '='

    const decodedKey = decodeURIComponent(key.replace(/\+/g, " "));
    const decodedValue = decodeURIComponent(value.replace(/\+/g, " "));

    if (params.hasOwnProperty(decodedKey)) {
      if (Array.isArray(params[decodedKey])) {
        params[decodedKey].push(decodedValue);
      } else {
        params[decodedKey] = [params[decodedKey], decodedValue];
      }
    } else {
      params[decodedKey] = decodedValue;
    }
  }
  return params;
}

module.exports = parseQueryString;
