function sumOfDistance(firstArr, secondArr) {
  firstArr.sort((a, b) => a - b);
  secondArr.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] > secondArr[i]) {
      total += firstArr[i] - secondArr[i];
    } else {
      total += secondArr[i] - firstArr[i];
    }
  }

  return total;
}

const arr1 = [2, 7, 4, 8, 4];
const arr2 = [5, 5, 6, 3, 4];

console.log(sumOfDistance(arr1, arr2));
