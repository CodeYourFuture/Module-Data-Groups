function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const firstEqualsIndex = pair.indexOf("=");
    const key = pair.slice(0, firstEqualsIndex);
    const value = pair.slice(firstEqualsIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
