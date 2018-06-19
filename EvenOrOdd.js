// This runs at constant time because regardless of the input size the number of operations remains the same.
// all it does it take the input and make an if check and then return true. same operation regardlessof size on input number

function isEven(value){
  let ticks = 0
  if (value % 2 == 0){
    ticks++;
    return {
      result: true,
      ticks: ticks
    };
  }
  else{
    ticks++;
    return {
      result: false,
      ticks: ticks
    }
  }
}

function getRunTimeOperations(fn, input) {
  const {ticks, result} = fn(input);
  console.log(
    `With input of size ${input}, ${fn.name} ` +
    `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(isEven, 2);
getRunTimeOperations(isEven, 555);
getRunTimeOperations(isEven, 55555555555);

// console.log(isEven(5324567));



