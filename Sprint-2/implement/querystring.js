function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }

  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }

    const [key, ...value] = pair.split("=");

    queryParams[key] = value.join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
