function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  if (typeof queryString !== "string") return "invalid input";

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");

    if (index === -1) continue;

    const key = pair.slice(0, index);
    const value = pair.slice(index + 1);

    if (key === "" || value.trim() === "") continue;

    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = parseQueryString;
