function commonLetter(str) {
    let charCount = {}
    let maxChar = ''
    let maxCount = 0

    for (let i = 0; i< str.length;i++) {
        let char = str[i]
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char]
        }
    }

    return maxChar
}

let res = commonLetter('hello world')
console.log(res)