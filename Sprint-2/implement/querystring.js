function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const equalIndex = pair.indexOf('=');

    if (equalIndex !== -1) {
      const key = pair.slice(0, equalIndex);
      const value = pair.slice(equalIndex + 1);
      queryParams[key] = value;
    }
    else {
      queryParams[key] = '';
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
