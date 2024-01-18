function cakes(recipe, available) {
    // set most cakes possible into a variable
    let maxCakes = 0;
    // loop through recipe object 
    while (true) {    
     for (let ingredient in recipe) {
      // if found compare to available
      if (!available[ingredient]) {
        return maxCakes;
        }
       if (available[ingredient] - recipe[ingredient] < 0) 
         {
           return maxCakes;
         }  
       else {
         available[ingredient] -= recipe[ingredient]
       }
      }
      maxCakes++;
      }
    }
    
    //if ingredients are found calculate how many cakes can be made
  //   console.log(recipe)
  //   console.log(available)
  //   const newObj = {recipe, available}
  //   const newArr = JSON.stringify(recipe).split(":").reduce(/{,}/)
  // console.log(newArr)
  //   console.log(available.flour % recipe.flour);
  //   console.log(newObj)
  //   if (recipe.flour < available.flour) {
  //     console.log(true)
  //   }
  //   return
    // }