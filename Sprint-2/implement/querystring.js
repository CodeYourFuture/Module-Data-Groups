function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const idx = pair.indexOf("=");
    let key, value;
    if (idx === -1) {
      key = decodeURIComponent(pair);
      value = undefined;
    } else {
      key = decodeURIComponent(pair.slice(0, idx));
      value = decodeURIComponent(pair.slice(idx + 1));
    }
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
