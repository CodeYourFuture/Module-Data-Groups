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

    const equalIndex = pair.indexOf("=");

    let key;
    let value;

    if (equalIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, equalIndex);
      value = pair.slice(equalIndex + 1);
    }

    key = decodeURIComponent(key.replaceAll("+", " "));
    value = decodeURIComponent(value.replaceAll("+", " "));

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;