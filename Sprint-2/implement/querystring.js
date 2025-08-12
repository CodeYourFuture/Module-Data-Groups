function parseQueryString(query) {
  if (!query || typeof query !== "string") return {};

  const result = {};

  // Remove leading ? if present
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
  
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
