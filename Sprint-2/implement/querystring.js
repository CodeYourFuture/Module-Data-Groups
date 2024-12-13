function parseQueryString(queryString) {
  const params = {};

  if (!queryString || typeof queryString !== "string") {
    throw new Error("Invalid query string");
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); 
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value || ""); 
    }
  }

  return params;
}

module.exports = parseQueryString;

