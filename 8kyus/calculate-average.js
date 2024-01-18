function findAverage(array) {
    if (array.length === 0) {
      return 0; // Handle the case when the array is empty
    }
  
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i]; // Sum the numbers in the array
    }
    
    return total / array.length; // Calculate the average
  }