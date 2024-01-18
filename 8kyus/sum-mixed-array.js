function sumMix(x) {
    let sum = 0;
  
    for (let i = 0; i < x.length; i++) {
      sum += parseInt(x[i], 10);
    }
  
    return sum;
  }