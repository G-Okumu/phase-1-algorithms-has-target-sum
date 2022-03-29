function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
        let newValue = target - array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (newValue === array[j]) {
                return true;
            }
        }
    }
    return false;

}

/* 
  Write the Big O time complexity of your function here
  - O(n^2)
*/

/* 
  Add your pseudocode here
  - loop through the array to find the remaining number to reach the target
  - nest another loop to check the next number from current
  - Check if newValue is equal to arrayatindex, array[j];
  - return true if they match, else false after whole loop

*/

/*
  Add written explanation of your solution here
  - input should be array of numbers and a target
  - if there is 2 numbers that add to the target return true else otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([0], 0));


    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-1, 6], 5));


    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;