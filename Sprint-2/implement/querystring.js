function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const splittedPair = pair.split("=");

    let formattedSplittedPairs = [];
    for (const element of splittedPair) {
      formattedSplittedPairs.push(
        element.replace("%25", "%").replace("%26", "&")
      );
    }
    queryParams[formattedSplittedPairs[0]] = formattedSplittedPairs
      .slice(1)
      .join("=");
  }

  return queryParams;
}
module.exports = parseQueryString;
