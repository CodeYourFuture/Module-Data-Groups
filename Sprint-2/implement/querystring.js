function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    // const [key, value] = pair.split("=");

    const equalsIndex = pair.indexOf("=");
    let key;
    let value;
    if (equalsIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, equalsIndex);
      value = pair.slice(equalsIndex + 1);
    }
    const decodedKey = decodeURIComponent(key.replaceAll("+", " "));
    const decodedValue = decodeURIComponent(value.replaceAll("+", " "));
    queryParams[decodedKey] = decodedValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
