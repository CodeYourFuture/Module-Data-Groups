function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString !== "string") {
    return queryParams;
  }

  if (queryString.startsWith("?")) {
    queryString = queryString.substring(1);
  }

  if (queryString.trim() === "") {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const equalIndex = pair.indexOf("=");

    let key = pair;
    let value = "";

    if (equalIndex !== -1) {
      key = pair.substring(0, equalIndex);
      value = pair.substring(equalIndex + 1);
    }

    key = decodeURIComponent(key);
    value = decodeURIComponent(value);

    if (queryParams.hasOwnProperty(key)) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
