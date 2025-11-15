function dedupe(arr){

    if (!Array.isArray(arr) || arr.length === 0) return [];

    const result = [];

    for (let i = 0; i < arr.length; i++){

      if (!result.includes(arr[i])){

        result.push(arr[i]);
      }
    }

  return result;

}
module.exports = dedupe;
