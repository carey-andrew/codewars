function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'white') {
      return win ? 'white' : 'black';
    } else {
      return win ? 'black' : 'white';
    }
  }