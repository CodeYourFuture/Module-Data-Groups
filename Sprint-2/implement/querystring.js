function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...values] = pair.split("=");
    console.log(pair.split("="));
    queryParams[key] = values.join("=");
  }

  return queryParams;
}

module.exports = parseQueryString;
