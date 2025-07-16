function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if ( pair === "") continue;// Skip empty pairs

    const [key, ...valueParts] = pair.split("=");//["equation", "x", "y+1"]
    const value = valueParts.length > 0 ? valueParts.join("=") : undefined; // glue everything after first "=" back ["x", "y+1"] => "x=y+1"
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
