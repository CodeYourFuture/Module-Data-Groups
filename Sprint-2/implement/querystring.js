function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair.includes("=")) {
      continue;
    }
    const [key, ...value] = pair.split("=");
    if (key === "") {
      continue;
    }
    queryParams[key] = value.join("=");
  }

  return queryParams;
}
console.log(parseQueryString("=sort&colour=yellow"));
module.exports = parseQueryString;
