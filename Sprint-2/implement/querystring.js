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

    const separatorIndex = pair.indexOf("=");

    const encodedKey =
      separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);

    const encodedValue =
      separatorIndex === -1 ? "" : pair.slice(separatorIndex + 1);

    const key = decodeURIComponent(encodedKey.replaceAll("+", " "));
    const value = decodeURIComponent(encodedValue.replaceAll("+", " "));

    if (!Object.hasOwn(queryParams, key)) {
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
