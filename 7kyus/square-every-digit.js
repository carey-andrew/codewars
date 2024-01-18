// we accept a number
// turn number into array with .split(), .math(), .reduce(), .form()
// square every indexed item in the array with x ** 2
// turn array back into number with .map() and return it
function squareDigits(num){
    const numArray = num.toString().split("");
    for (let i = 0; i < numArray.length; i++) {
      numArray[i] = numArray[i] ** 2;
    }
    return Number(numArray.join(""));
  }