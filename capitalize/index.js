// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capString = str[0].toUpperCase();
  for(let i = 1; i  < str.length; i++) {
    if (capString[i - 1] === ' ') {
      capString += str[i].toUpperCase();
    } else {
      capString += str[i];
    }
  }
  return capString;
}

module.exports = capitalize;

// function capitalize(str) {

//   let capStringAr = [];
//   for(let words of str.split(' ')) {
//     capStringAr.push(words[0].toUpperCase() + words.slice(1, words.length))
//   }

//   return capStringAr.join(' ');
// }