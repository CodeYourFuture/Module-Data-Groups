function calculateMedian(list) {

 if(list.length=== 0) return 0;


 const sortedList = [...list].sort((a, b) => a-b);
 
 const middleIndex = Math.floor(sortedList.length /2 );

 if (sortedList.length % 2 === 0) {
  const leftMiddle = sortedList[middleIndex -1];
  const rightMiddle = sortedList[middleIndex];
  return (leftMiddle + rightMiddle) /2;
} else {

 return sortedList[middleIndex];
}
}

test("doesn't modify the input", () => {
  const list = [1, 2, 4, 5];
  calculateMedian(list);

   expect(calculateMedian(list)).toEqual(3);     // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
}); 