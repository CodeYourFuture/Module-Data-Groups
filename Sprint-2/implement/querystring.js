function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }
    const [key, ...rest] = pair.split("=");
    const value = rest.join("=");
    const keyDecode = decodeURIComponent(key);
    const valueDecode = decodeURIComponent(value);
    let keyDecodeWithout = keyDecode;
    let valueDecodeWithout = valueDecode;
    if (keyDecode.includes("+")) {
      keyDecodeWithout = keyDecode.replace("+", " ");
    }
    if (valueDecode.includes("+")) {
      valueDecodeWithout = valueDecode.replace("+", " ");
    }
    queryParams[keyDecodeWithout] = valueDecodeWithout;
  }
  return queryParams;
}

module.exports = parseQueryString;
