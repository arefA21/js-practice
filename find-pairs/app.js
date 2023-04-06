function findParis(numbers, target) {
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    console.log(i, 'i')
    for (let j = 0; j < numbers.length; j++) {
        console.log(j, 'j')
      if (numbers[i] + numbers[j] === target) {
        if (
          !pairs.some(
            (pair) => pair.includes(numbers[i]) && pair.includes(numbers[j])
          )
        ) {
          pairs.push([numbers[i], numbers[j]]);
        }
      }
    }
  }
  return pairs;
}


let result = findParis([3,4,5,6], 10)
console.log(result)