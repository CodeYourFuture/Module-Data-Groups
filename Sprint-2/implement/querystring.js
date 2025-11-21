function parseQueryString(queryString) {
  if (typeof queryString !== "string") {
    throw new TypeError("Invalid input: Input must be a string");
  }
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    let key, value;

    if (index === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, index);
      value = pair.slice(index + 1);
    }

    try {
      key = decodeURIComponent(key);
      value = decodeURIComponent(value);
    } catch (err) {
      throw new Error("Invalid URL-encoded string");
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
