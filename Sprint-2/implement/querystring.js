function parseQueryString2(argument){
  let targetObject = {};
  // use this conditional statement in case the query string is empty!
  if (argument.length === 0){
      return targetObject
  }
  //converting string to array using & (in case & exists)
  const STRING_TO_ARRAY = argument.split("&");
  const A = STRING_TO_ARRAY.reduce((object,item)=>{
  const getIndex = item.indexOf("=");
  const key  = item.slice(0,getIndex);
  const value = item.slice(getIndex+1);
  object[key] = value;
  return object; //attention: i must return acc in each iteration! or it breaks -_-
  },{});
  return A;
}
console.log(parseQueryString2("equation=x=y+1&sky=blue=color1"));
module.exports = parseQueryString2;
