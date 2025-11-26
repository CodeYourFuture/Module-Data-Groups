function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) {
    return queryParams;
  }

  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const firstEq = pair.indexOf("=");

    let key;
    let value;

    if (firstEq === -1) {
      // No "=" found → key with empty value
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, firstEq));
      value = decodeURIComponent(pair.slice(firstEq + 1));
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
console.log(parseQueryString("?text=Hello%20World&amount=5%25"));
