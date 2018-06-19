// This algorithm has polynomial time complexity of O(n^2)
// Complexity depends on the amount of loops that need to be
// entered, regardless of the length of the inputs
function areYouHere(arr1, arr2) {
  let ticks = 0;
    for (let i=0; i<arr1.length; i++) {
      ticks++;
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
        ticks++;
          const el2 = arr2[j];
          if (el1 === el2) {
            return {
              result: true,
              ticks: ticks
            };
          }
      }
    }
    return {
      results: false,
      ticks: ticks
    };
}

console.log(areYouHere([1, 2, 3], [1, 4, 3]));
console.log(areYouHere([1, 2, 3, 55, 10], [1, 4, 10, 3, 55]));
console.log(areYouHere([1, 2, 3, 55, 10], [0, 4, 11, 9, 56]));
