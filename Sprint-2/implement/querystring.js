function parseQueryString(queryString) {
  const params = {};

  if (!queryString) return params;

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const [key, ...rest] = pair.split("=");
    const value = rest.join("="); // Handles multiple '=' signs
    params[key] = value;
  }

  return params;
}

module.exports = parseQueryString;

