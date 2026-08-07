function decodeComponent(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
}

function parseQueryString(queryString) {
  if (queryString.length === 0) {
    return {};
  }

  const params = {};
  const pairs = queryString.split("&").filter((pair) => pair !== "");

  for (const pair of pairs) {
    const [rawKey, ...rest] = pair.split("=");
    const key = decodeComponent(rawKey);
    const value = decodeComponent(rest.join("="));

    if (key in params) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  }

  return params;

}

module.exports = parseQueryString;