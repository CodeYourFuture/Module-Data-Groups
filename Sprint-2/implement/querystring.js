function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");//finds the first "=" char.
    if (index > -1) {
      const key = pair.substring(0, index);//defines the key to be from the first char until the firs "=" char.
      const value = pair.substring(index + 1);//defines the value to be from the "=" char until the last char.
    queryParams[key] = value;
  }
}

  return queryParams;
}
module.exports = parseQueryString;
