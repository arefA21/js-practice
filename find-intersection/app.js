function findIntersection(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

console.log(findIntersection([99, 12, 3, 5], [55, 33, 12, 99]));
