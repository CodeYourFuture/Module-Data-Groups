function parseQueryString(queryString) {
  const queryParams = {};

  for (const pair of queryString.split("&")) {
    if (pair === "") continue;

    const eq = pair.indexOf("=");
    const key = eq === -1 ? pair : pair.slice(0, eq);
    const value = eq === -1 ? "" : pair.slice(eq + 1);
    queryParams[key] = value;

    const key = decodeURIComponent(eq === -1 ? : pair.slice(0, eq));
    const value = eq === -1 ? "" : decodeURIComponent(pair.slice(eq + 1));
  }






  //   if (queryString.length === 0) {
  //     return queryParams;
  //   }
  //   const keyValuePairs = queryString.split("&");

  //   for (const pair of keyValuePairs) {
  //     const [key, value] = pair.split("=");
  //     queryParams[key] = value;
  //   }

  return queryParams;
}

module.exports = parseQueryString;
