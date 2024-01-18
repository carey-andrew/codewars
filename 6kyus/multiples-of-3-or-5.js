function solution(number) {
    // Initialize an array to store multiples of 3 or 5
  let multiples = [];

  // Loop through the range from 1 to the given number
  for (let i = 1; i < number; i++) {
    // Check if 'i' is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i); // If yes, add it to the 'multiples' array
    }
  }

  // Initialize a variable to store the sum
  let sum = 0;

  // Calculate the sum of all multiples
  for (let i = 0; i < multiples.length; i++) {
    sum += multiples[i];
  }

  // Return the sum
  return sum;
}