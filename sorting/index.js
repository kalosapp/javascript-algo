// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let lesser = arr[i];
    arr[i] = arr[min];
    arr[min] = lesser;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const arr = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
