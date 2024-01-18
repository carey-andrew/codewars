function mergeArrays(a, b) {
    // merge a and b into one array and then remove duplicates
    //step 1 - merge a and b
    //step 2 check for duplicates
    const combined = [...a, ...b]
    const newArr = []
    console.log(combined.sort((a,b) => a-b))
    // check duplicates
    for (let i= 0; i < combined.length; i++)
      if (combined[i] != combined[i+1]) {
        newArr.push(combined[i])
      } return newArr;
  }