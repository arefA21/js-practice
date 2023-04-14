function charCount(str) {
  const counts = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z]/.test(char)) {
      counts[char] = ++counts[char] || 1;
    }
  }
  return counts;
}

console.log(charCount("hello world"));
