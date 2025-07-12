function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  for (const pair of queryString.split("&")) {
    if (!pair) continue;
    const [key, ...rest] = pair.split("=");
    const value = rest.length > 0 ? rest.join("=") : "";
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return queryParams;
}

module.exports = parseQueryString;
