function parseQueryString(queryString) {
  if (typeof queryString !== "string") {
    throw new Error("parseQueryString requires a string");
  }

  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (let pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    }

    pair = decodeURIComponent(pair);

    let splitIndex = pair.indexOf("=");
    if (splitIndex === -1) {
      splitIndex = pair.length;
    }
    const key = pair.substring(0, splitIndex).replaceAll("+", " ");
    const value = pair.substring(splitIndex + 1).replaceAll("+", " ");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
