function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  // 1. with RegEx
  // for (const pair of keyValuePairs) {
  //   const [key, value] = pair.split(/=(.*)/s);
  //   queryParams[key] = value;
  // }

  // 2. with substring method
  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");

    const key = pair.substring(0, index);
    const value = pair.substring(index + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
