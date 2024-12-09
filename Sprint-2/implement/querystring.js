function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.trim() === "") continue;
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("=");
    const decodedKey = decodeURIComponent(key || "").trim();
    const decodedValue = decodeURIComponent(value || "").trim();

    if (decodedKey) {
      if (queryParams[decodedKey]) {
        queryParams[decodedKey] = [].concat(queryParams[decodedKey], decodedValue);
      } else {
        queryParams[decodedKey] = decodedValue;
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
