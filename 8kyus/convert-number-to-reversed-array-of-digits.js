function digitize(n) {
    // accept number, add number to an array and reverse order
    return n.toString().split('').map(Number).reverse();
    
  }