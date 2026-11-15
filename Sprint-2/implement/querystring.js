function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&").filter((pair) => pair !== "");

  for (const pair of keyValuePairs) {
    const parts = pair.split("=");
    const key = decodeURIComponent(parts[0].replace(/\+/g, " "));
    const value = decodeURIComponent(
      parts.slice(1).join("=").replace(/\+/g, " ")
    );
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
