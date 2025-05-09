function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");
    queryParams[key] = value.join("=");
  }

  return queryParams;
}

console.log(parseQueryString("password=fgr=ef.=f"))
module.exports = parseQueryString;
