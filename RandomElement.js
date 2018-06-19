// O(1) constant
// size of input does not effect the timeto complete


function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

