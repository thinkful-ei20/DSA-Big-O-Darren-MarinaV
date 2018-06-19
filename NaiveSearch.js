// Algorithm with linear time complexity O(n)
// Amount of operations grows proportionally to the size of
// the input.
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}