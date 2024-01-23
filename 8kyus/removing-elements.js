function removeEveryOther(arr) {
    // Create a new array with every second element removed
    const newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
      newArray.push(arr[i]);
    }
  
    return newArray;
  }