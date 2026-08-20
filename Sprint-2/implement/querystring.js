function decodeComponent(str) {
  return decodeURIComponent(str.replaceAll("+", " "));
}

function parseQueryString(queryString) {
  if (queryString.length === 0) {
    return {};
  }

  const params = {};
  const pairs = queryString.split("&").filter((pair) => pair !== "");

  for (const pair of pairs) {
    const [rawKey, ...rawValueParts] = pair.split("=");
    const key = decodeComponent(rawKey);
    const value = decodeComponent(rawValueParts.join("="));

    params[key] = key in params ? [].concat(params[key], value) : value;
  }

  return params;
}

module.exports = parseQueryString;