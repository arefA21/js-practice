function removeVowels(str) {
    // g => flag is a modifier that is used to perform a global search for a pattern ina given string
    return str.replace(/[aeiou]/gi, '')
}

console.log(removeVowels('Hello world!'))