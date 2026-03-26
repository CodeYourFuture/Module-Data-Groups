function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) return queryParams;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const index = pair.indexOf("=");
    // if there is a key but no equals, return empty string for value.
    let key;
    let value;
    if (index === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, index).trim();
      value = pair.slice(index + 1).trim();
    }

    if (!key) continue;
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
