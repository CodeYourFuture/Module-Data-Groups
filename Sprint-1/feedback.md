# General Feedback for Sprint-1 Exercises

## `Sprint-1/fix/median.js`

When using array methods, it is important to recognise:
- Does the method mutate the array?
- If the method returns an array, is the returned array a new array or the original array?

For this exercise, we should avoid modifying the original array.  
However, for better performance, we should also avoid making unnecessary clones of arrays.  

Does your implementation make any unncessary array clones?

## `Sprint-1/implement/dedupe.test.js`

### Checking if two arrays are different arrays
One of the tests is expected to check whether the returned array is a **copy** of the original array -- 
that is, whether they are two different arrays.

The following test only checks whether both arrays contain the same elements;
it cannot check whether the arrays are actually different objects:
```
  expect(array1).isEqual(array2);
```

**Suggestion**: Find out how to test whether two arrays are different arrays in Jest.


## `Sprint-1/implement/sum.js` and `Sprint-1/implement/max.js`

### Ensuring a value is a number within an expected range

What are the differences among the following approaches for checking if `num` is a number?
Which of them suit your needs better?

```javascript
typeof num == "number"
!isNaN(num)
!Number.isNaN(num)
isFinite(num)
Number.isFinite(num)
Number.isInteger(num)
Number.isSafeInteger(num)
```

## `Sprint-1/implement/sum.test.js`

### Comparing floating-point numbers correctly

Decimal numbers in most programming languages (including JavaScript) are internally represented in floating-point format.  
Floating-point arithmetic is not exact. For example, the expression `46.5678 - 46 === 0.5678` evaluates to `false` 
because `46.5678 - 46` produces a value that is only very close to `0.5678`, not exactly equal.  
Even changing the order in which numbers are added or subtracted can lead to slightly different results.

So the following could happen
```javascript
  expect( 1.2 + 0.6 + 0.005 ).toEqual( 1.805 );                // This will fail
  expect( 1.2 + 0.6 + 0.005 ).toEqual( 1.8049999999999997 );   // This will pass
  expect( 0.005 + 0.6 + 1.2 ).toEqual( 1.8049999999999997 );   // This will fail

  console.log(1.2 + 0.6 + 0.005 == 1.805);                     // false
  console.log(1.2 + 0.6 + 0.005 == 0.005 + 0.6 + 1.2);         // false
```

**Can you find a more appropriate way to test a value (that involves decimal-number calculations) for equality?**

**Suggestion**: Look up
- how to check equality in floating-point arithmetic in JavaScript
- how to check equality in floating-point arithmetic using Jest


