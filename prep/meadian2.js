function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}
const lists = [1, 2, 3];
console.log(calculateMedian(lists));

/*  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "number" && typeof list[i] === " ") {
      // List is checked whether it is numbers and strings.
      return null; // Null is returned if list is not numbers or has mixed values(numbers and strings)
    }
    const middleIndex = Math.floor(list.length / 2);

    if (list.length % 2 === 0) {
      return (list[middleIndex - 1] + list[middleIndex]) / 2;
    }
    return list[middleIndex];
  }
} */