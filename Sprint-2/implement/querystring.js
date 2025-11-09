function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");//method split gives us an array

  for (const pair of keyValuePairs) {
    const indexForKey = pair.indexOf('=');
    const key = pair.substring(0,indexForKey);
    const value = pair.substring(indexForKey+1, pair.length)


    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
