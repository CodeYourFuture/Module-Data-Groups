function parseQueryString(queryString) {

  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    firstIndexOfEqualsSign = pair.indexOf("=");

    const key = pair.slice(0,firstIndexOfEqualsSign);
    const value = pair.slice(firstIndexOfEqualsSign+1);
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
