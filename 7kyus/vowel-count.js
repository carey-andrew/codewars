// input is string
// set vowel counter variable
// iterate through the string
// if statement to check whether vowel or not
// is vowel = +1 else continue
// when iteration = string length then break
// output counter total
function getCount(str) {
    let vowelCounter = 0;
    for (let i = 0; i < str.length; i++) {
      if (["a","e","i","o","u"].includes(str[i])) {
        vowelCounter++
      }
    }
    return vowelCounter;
  }