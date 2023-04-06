function palindrome(str) {
  const newStr = str.replace(/[^\w]/g, "").toLowerCase();
  return newStr === newStr.split("").reverse().join("");
}

let result = palindrome("never odd or even");
console.log(result);

/* 
about this line => str.replace(/[^\w]/g, '')

'replace()' : method to remove all non-alphanumeric characters (whitespaces and punctuation) from the input.
'/ /' : marks at the beginnig and end of the reguk=lar expression indicate that is a regular expression

'[^ ]' : inside the square brackets indicate that we want to match any character that is not in the set of characters that follows

'\w' : this is matches any alphanumeric character and '^' at beginning negates it

'/g' : at the end of the regular expression if a flag that stand for "global" and it means that the replace() method should replace all occi=urences of the regular expression in the string, not just the first one
*/
