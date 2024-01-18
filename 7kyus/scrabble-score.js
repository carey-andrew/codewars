function scrabbleScore(str){
    let totalScore = 0;
  
    // Convert the word to uppercase for case-insensitive scoring
    
    for (let i = 0; i < str.length; i++) {
      totalScore += $dict[str[i].toUpperCase()] || 0;
    }
    return totalScore
  
    // Create an object where each letter maps to its corresponding score
    
  }