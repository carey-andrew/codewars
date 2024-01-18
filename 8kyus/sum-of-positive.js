// array as parameter for our function
// check if each item of array is negative or positive
// number >= 0 // Math.sign()
// if positive, we add it to a variable and store it
// keep looping until you add all the positive numbers - for loop
// return the sum/final value of the variable
function positiveSum(arr) {
    let tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        tempSum += arr[i];
      }
    }
    return tempSum;
  }