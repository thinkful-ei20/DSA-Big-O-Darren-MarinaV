// Linear O(n) - as input size increases by x it only iterates x more times. 
// 

function isPrime(n) {
  let ticks = 0;
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}


console.log(isPrime(1));
