function parseQueryString(queryString) {
  const queryParams = {};

  for (const pair of queryString.split("&")) {
    if (pair === "") continue;

    const eq = pair.indexOf("=");
    const key = eq === -1 ? pair : pair.slice(0, eq);
    const value = eq === -1 ? "" : pair.slice(eq + 1);

    const k = decodeURIComponent(key.split("+").join(" "));
    const v = decodeURIComponent(value.split("+").join(" "));

    if (k in queryParams) {
      if (Array.isArray(queryParams[k])) {
        queryParams[k].push(v);
      } else {
        queryParams[k] = [queryParams[k], v];
      }
    } else {
      queryParams[k] = v;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
