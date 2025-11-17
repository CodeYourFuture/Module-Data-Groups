function parseQueryString(queryString) {
  const queryParams = {};
  const decodedString = decodeURIComponent(queryString);

  if (decodedString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = decodedString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.indexOf("=") !== pair.lastIndexOf("=")) {
      const firstEqualIndex = pair.indexOf("=");
      const key = pair.substring(0, firstEqualIndex);
      const value = pair.substring(firstEqualIndex + 1);
      queryParams[key] = value;
    } else {
      const [key, value] = pair.split("=");
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
