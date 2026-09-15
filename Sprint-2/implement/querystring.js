function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString === "") {
    return queryParams;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
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

    key = key.replace(/\+/g, " ");
    value = value.replace(/\+/g, " ");

    key = decodeURIComponent(key);
    value = decodeURIComponent(value);

    if (queryParams[key] === undefined) {
      queryParams[key] = value;
    } else if (Array.isArray(queryParams[key])) {
      queryParams[key].push(value);
    } else {
      queryParams[key] = [queryParams[key], value];
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
