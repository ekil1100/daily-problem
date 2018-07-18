// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
//
// You can modify the input array in-place.

let c1 = [3, 4, -1, 1];
let c2 = [1, 2, 0];

// Method 1 O(nlogn) because of sort
function fn(array) {
  let index;
  let res;

  array = array.sort();

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      index = i;
      break;
    }
  }

  array = array.slice(index);

  for (let i = 1; i < array.length; i++) {
    if (i != array[i - 1]) {
      res = i;
    }
  }

  if (!res) {
    res = array[array.length - 1] + 1;
  }

  return res;
}

console.log(fn(c1));
console.log(fn(c2));
