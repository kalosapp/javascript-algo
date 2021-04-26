// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkAr = [];
  let index = 0;
  while(index < array.length) {
    chunkAr.push(array.slice(index, index + size));
    index+=size;
  }
  return chunkAr;
}

module.exports = chunk;


// function chunk(array, size) {
//   const chunkAr = [];
//   array.forEach(element => {
//     let chunk = chunkAr[chunkAr.length - 1];
//     if (!chunk || chunk.length === size) {
//       chunkAr.push([element]);
//     } else {
//       chunk.push(element);
//     }
//   });
//   return chunkAr;
// }