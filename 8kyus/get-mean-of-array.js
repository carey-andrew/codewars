function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    //loop through array and add up (sum) contents of array 
    //round down the average when dividing sum/array length
    
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i]
      
    }
    let average = Math.floor(sum / marks.length)
    return average;
  }