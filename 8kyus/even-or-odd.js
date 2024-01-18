//function that can tell if a number is odd or even
//return a string that is "Even" or "Odd"
// Check if entry is a number - using typeof
//Use the remainder function to see if a number is divisible by 2
//if else to see if there is a remainder
//if divisible log "Even"
//else log "Odd"

function evenOrOdd(number) {
    if (typeof number !== "number") { 
        return "not a number"      
      } else if (number % 2 === 0) {
        return "Even"
      } else return "Odd"
      
  }