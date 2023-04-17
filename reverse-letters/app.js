function reverseLetters(str) {
  let words = str.split(" ");
  let reverseLetters = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reverseLetters.push(words[i]);
  }
  return reverseLetters.join(" ");
}

console.log(reverseLetters("this is my car"));
