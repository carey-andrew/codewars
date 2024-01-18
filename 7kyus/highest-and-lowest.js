// turn string into array using split(" ")
// Math.max() and Math.min()
// .join(" ") to return one string
function highAndLow(numbers){
    let numberArray = numbers.split(" ")
    return (Math.max(...numberArray) + " " + Math.min(...numberArray))
  }