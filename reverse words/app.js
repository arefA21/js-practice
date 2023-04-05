function reversWords(str) {
    const words = str.split(" ")
    const reversWords = words.map((word) => word.split("").reverse().join(""))
    return reversWords.join(" ")
}

let result = reversWords("hello js")
console.log(result)