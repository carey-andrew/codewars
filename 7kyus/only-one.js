function onlyOne() {
    let trueCount = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === true) {
        trueCount++;
      }
    }
  
    return trueCount === 1;
  }