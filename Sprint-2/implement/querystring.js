function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) return queryParams;

  for (const pair of queryString.split("&")) {
    if (!pair) continue;
    const eqIndex = pair.indexOf("=");
    const key = decodeURIComponent((eqIndex === -1 ? pair : pair.slice(0, eqIndex)).replace(/\+/g, " "));
    const value = eqIndex === -1 ? "" : decodeURIComponent(pair.slice(eqIndex + 1).replace(/\+/g, " "));

    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      queryParams[key] = [].concat(queryParams[key], value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
