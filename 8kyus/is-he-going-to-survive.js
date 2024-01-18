function hero(bullets, dragons) {
    // Check if the number of bullets is greater than or equal to the number of dragons multiplied by 2.
    // If true, the hero has enough bullets to defeat the dragons; return true.
    // If false, the hero doesn't have enough bullets; return false.
    return bullets >= dragons * 2;
  }