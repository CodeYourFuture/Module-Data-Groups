function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }

  if (queryString.length === 0) {
    return queryParams;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const index = pair.indexOf("=");
    let key, value;

    if (index === -1) {
      key = pair;
      value = undefined;
    } else {
      key = pair.slice(0, index);
      value = pair.slice(index + 1);
    }

    const decodedKey = decodeURIComponent(key);

    if (value === undefined || value === "") {
      queryParams[decodedKey] = undefined;
    } else {
      queryParams[decodedKey] = decodeURIComponent(value);
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
