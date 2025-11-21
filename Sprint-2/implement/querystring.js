function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryParams) return queryParams;

  const searchParameters = new URLSearchParams(queryString);

  for (const [key, value] of searchParameters.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
