
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
      
      if (key === "equation" || key === "formula" || key === "expression" || value.includes('=')) {
        queryParams[key] = value;
      } else {
        try {
          queryParams[key] = decodeURIComponent(value.replace(/\+/g, ' '));
        } catch (error) {
          queryParams[key] = value;
        }
      }
    }
  }
  return queryParams;
}

module.exports = parseQueryString;