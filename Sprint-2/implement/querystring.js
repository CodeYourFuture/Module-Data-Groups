function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }
    let [key, ...rest] = pair.split("=");
    let value = rest.join("=");

    key = decodeURIComponent(key.replaceAll("+", " "));
    value = decodeURIComponent(value.replaceAll("+", " "));

    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = parseQueryString;
