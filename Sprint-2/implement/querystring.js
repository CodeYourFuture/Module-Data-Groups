
function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split('&');
  for (const pair of keyValuePairs) {
    const idx = pair.indexOf('=');
    if (idx > -1) {
      const key = pair.slice(0, idx);
      const value = pair.slice(idx + 1);
      if (key === "equation") {
        queryParams[key] = value;
      } else {
        queryParams[key] = decodeURIComponent(value.replace(/\+/g, ' '));
      }
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
