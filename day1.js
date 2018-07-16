// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

// Method 1
function fn(array, k) {
  return array.some((element, index) => {
    for (let i = index + 1; i < array.length; i++) {
      if (element + array[i] == k) {
        return true;
      }
    }
  });
}

console.log(fn([10, 15, 3, 7], 16));
