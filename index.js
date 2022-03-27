function hasTargetSum(array, target) {
  // Write your algorithm here
  let obj = {}
  for (let i=0; i < array.length; i++) {
    let diff = target - array[i]
    if (obj[diff]) {
      return true
    } else {
      obj[array[i]] = true
    }
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  create empty object
  loop through the array
  if the difference of the target number and object key is the same return true, else false
*/

/*
  Add written explanation of your solution here
  for each element in the array get the difference between the element and the target value
  put the current element into the an object as a key
  if any key in the object matches the difference between the target number and current element return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log('=>', hasTargetSum([1,2,3,4,5,6], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log('expecting: false');
  console.log('=>', hasTargetSum([0,9,8,7,6], 2));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
