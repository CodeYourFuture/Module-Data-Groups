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

    const equalsIndex = pair.indexOf("=");
    const rawKey = equalsIndex === -1 ? pair : pair.slice(0, equalsIndex);
    const rawValue = equalsIndex === -1 ? "" : pair.slice(equalsIndex + 1);
    const keyWithSpaces = rawKey.split("+").join(" ");
    const valueWithSpaces = rawValue.split("+").join(" ");
    const key = decodeURIComponent(keyWithSpaces);
    const value = decodeURIComponent(valueWithSpaces);

    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
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
