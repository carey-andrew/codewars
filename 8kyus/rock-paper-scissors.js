const rps = (p1, p2) => {
    //function takes the input then determines who is the winner
    //p1 and p2 input choice
    //3 outcomes, win lose or draw
    //win if scissors vs paper, rock vs scissors or paper vs rock
    //draw if inputs are the same
    //else lose round
    if (p1 === p2) {
      return "Draw!";
    }
    if (
       (p1 === "rock" && p2 === "scissors") || 
       (p1 === "paper" && p2 === "rock")  || 
       (p1 === "scissors" && p2 === "paper")) {
       return "Player 1 won!"
     }
    
      return "Player 2 won!"
    
      
  };