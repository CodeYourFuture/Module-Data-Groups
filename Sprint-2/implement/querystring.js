function parseQueryString(queryString) {
  if (!queryString) return {};

  const result = {};
  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const index = pair.indexOf("=");
    let key, value;

    if (index === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.s