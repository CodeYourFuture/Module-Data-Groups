function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") continue;
    const eqIndex = pair.indexOf("=");
    if (eqIndex === -1) {
      const decodedKey = decodeURIComponent(pair.replaceAll("+", " "));
      queryParams[decodedKey] = "";
    } else {
      let key = pair.slice(0, eqIndex);
      let value = pair.slice(eqIndex + 1);
      key = decodeURIComponent(key.replaceAll("+", " "));
      value = decodeURIComponent(value.replaceAll("+", " "));
      queryParams[key] = value;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
