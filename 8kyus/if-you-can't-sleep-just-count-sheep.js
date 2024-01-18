// using the number given return the number in sequence each time followed by the string "sheep..."
// declare the variable as a blank string
// change the variable 'num' into counter
//loop adding additional pieces of string each time the loop executes
// return the variable


var countSheep = function (num){
    let outputString = ""
      for (let i=1; i <= num; i++) {
        outputString += i + " sheep..."
    }
    return outputString;
  }