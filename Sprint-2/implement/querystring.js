function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;

  queryString.split("&").forEach(pair => {
      const [key, ...valueParts] = pair.split("=");
      const value = valueParts.join("=");
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
  });

  return queryParams;
}

module.exports = parseQueryString;