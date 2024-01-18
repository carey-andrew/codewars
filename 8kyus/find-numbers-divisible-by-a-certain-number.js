function divisibleBy(numbers, divisor) {
  // Check if number is divisible by the divisor
  // If yes, add to an array (or remove if it isn't)
  let array = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      array.push(numbers[i]);
    }
  }

  return array;
}