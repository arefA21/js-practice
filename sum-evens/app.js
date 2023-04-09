function sumEvens(numbers) {
  let count = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (i % 2 === 0) {
      count += i;
    }
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
sumEvens(numbers);
