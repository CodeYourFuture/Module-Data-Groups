function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue;

    const index = pair.indexOf("=");

    let key, value;

    if (index === -1) {
      key = decodeURIComponent(pair);
      value = true;
    } else {
      key = decodeURIComponent(pair.slice(0, index));
      value = decodeURIComponent(pair.slice(index + 1));
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;