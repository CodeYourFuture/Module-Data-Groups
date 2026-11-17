function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {

    if (pair.length === 0){
      continue;
    }

    const splitIndex = pair.indexOf("=");
    const key = pair.substring(0, splitIndex);
    const value = pair.substring(splitIndex + 1,);
    queryParams[key] = value;
  }

  return queryParams;
}

parseQueryString("key1=value1&&key2=value2&");

module.exports = parseQueryString;
