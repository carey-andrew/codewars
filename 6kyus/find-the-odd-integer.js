function findOdd(A) {
    //create an empty variable numerOfTimes = 0
    //loop through the array and for each number compare with others 
    // if number is equal to the chosen number then add 1 to a count
    //if count is not divisible by 2 then return the number
    // if % != 2
    
    // Loop through the array
    for (let i = 0; i < A.length; i++) {
      let count = 0; // Initialize count for each element
      
      // Inner loop to compare A[i] with other elements
      for (let j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          count++; // Increment count if the elements are equal
        }
      }
      
      // Check if count is odd
      if (count % 2 !== 0) {
        return A[i]; // Return the odd occurring element
      }
    }
    
    // Return 0 if no odd occurring element is found
    return 0;