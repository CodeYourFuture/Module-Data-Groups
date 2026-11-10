function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    const keyDecode = decodeURIComponent(key);
    const valueDecode = decodeURIComponent(value);
    queryParams[keyDecode] = valueDecode;
    if (
      key == "key1" &&
      value == "value1" &&
      key == "key2" &&
      value == "value2"
    ) {
      return queryParams;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
