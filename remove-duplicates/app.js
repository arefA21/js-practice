function removeDuplicates(arr) {
  const result = [];
  const set = new Set();
  for (const num of arr) {
    if (!set.has(num)) {
      set.add(num);
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(removeDuplicates([1, 5, 4, 2, 2, 5, 3, 44, 12]));
