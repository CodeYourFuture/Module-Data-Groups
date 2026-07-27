function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&").filter(item=>item!=='');

  for (const pair of keyValuePairs) {
     pair = pair.replace(/\+/g,'')
  }

  return queryParams;
}

module.exports = parseQueryString;
