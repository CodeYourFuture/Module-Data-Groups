function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  for (const pair of queryString.split("&")) {
    const [key, ...rest] = pair.split("=");
    const value = rest.length ? rest.join("=") : "";
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}
module.exports = parseQueryString;
