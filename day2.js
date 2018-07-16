// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

case1 = [1, 2, 3, 4, 5];
case2 = [3, 2, 1];

// method 1
function fn(arr) {
  let muti = 1;
  let res = [];

  arr.forEach(num => {
    muti *= num;
  });

  arr.forEach(num => {
    res.push(muti / num);
  });

  return res;
}

console.log(`Test Case 1: [${fn(case1)}]`);
console.log(`Test Case 2: [${fn(case2)}]`);

// method 2
function fn2(){
  let res = [];
}
