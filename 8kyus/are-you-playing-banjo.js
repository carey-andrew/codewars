function areYouPlayingBanjo(name) {
    // We need to look at the first letter of the name
    let firstLetter = name.charAt(0);
    // Change the letter to uppercase
    let capital = firstLetter.toUpperCase();
    // If the letter is R, return plays banjo string
    if (capital == "R"){
      return name + " plays banjo";
    }
    else {return name + " does not play banjo"};
    // If (else) the letter is not equal to R, return does not play banjo
  }