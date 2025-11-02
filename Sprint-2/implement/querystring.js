function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if(pair.indexOf('=') !== pair.lastIndexOf('=')){
      const firstEqualIndex = pair.indexOf('=');
      const key = pair.substring(0, firstEqualIndex);
      const value = pair.substring(firstEqualIndex + 1);
      queryParams[key] = value;
      continue;
    } else {
      const [key, value] = pair.split("=");
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
