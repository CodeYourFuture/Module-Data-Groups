function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    const decodedKey = decodeURIComponent(key || "").trim();
    const decodedValue = decodeURIComponent(valueParts.join("=") || "")
      .replace(/\+/g, " ")
      .trim();

    if (decodedKey) {
      queryParams[decodedKey] = decodedValue;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
