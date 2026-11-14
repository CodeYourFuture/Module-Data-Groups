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

    const lastThreeCharKey = key.slice(-2);
    if (!lastThreeCharKey.includes("+") || key.includes("%")) {
      key = decodeURIComponent(key.replaceAll("+", " "));
    }
    const lastThreeCharVal = value.slice(-2);
    if (!lastThreeCharVal.includes("+")) {
      value = decodeURIComponent(value.replaceAll("+", " "));
    }
    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = parseQueryString;
