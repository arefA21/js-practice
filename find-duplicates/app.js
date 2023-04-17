function findDuplicates(arr) {
    let duplicates = []
    for (let i = 0; i < arr.length;i++) {
        if (arr.lastIndexOf(arr[i]) != i && duplicates.indexOf(arr[i]) == -1) {
            duplicates.push(arr[i])
        }
    }
    return duplicates;
}

console.log(findDuplicates([1,2,2,1,4,5,6]))