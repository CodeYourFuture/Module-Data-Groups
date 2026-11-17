function parseQueryString(queryString) {

  queryString = decodeURIComponent(queryString);

  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {

    if (pair.length === 0){
      continue;
    }

    let splitIndex = pair.indexOf("=");
    if (splitIndex === -1){
      splitIndex = pair.length;
    }
    const key = pair.substring(0, splitIndex);
    const value = pair.substring(splitIndex + 1,);
    queryParams[key] = value;
  }

  return queryParams;
}

parseQueryString("key");

module.exports = parseQueryString;
