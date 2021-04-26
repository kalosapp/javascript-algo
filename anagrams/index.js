// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCharMap(str) {
  const charMap = {};

  for(let char of str) {
    charMap[char] = charMap[char] || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const stringAmap = getCharMap(stringA);
  const stringBmap = getCharMap(stringB);

  if (Object.keys(stringAmap).length !== Object.keys(stringBmap).length ) {
    return false;
  }
  
  for(let char in stringAmap) {
    if (stringAmap[char] !== stringBmap[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;



// function anagrams(stringA, stringB) {
//   return stringA.split('').sort().join('') === stringB.split('').sort().join('');
// }