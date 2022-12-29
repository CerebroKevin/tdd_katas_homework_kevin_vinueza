/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
const game = (num) => {
  if(isMultiple(num,3) && !isMultiple(num,5) && !isPrime(num)){
    return 'FIZZ'
  }
  if(isMultiple(num,5) && !isMultiple(num,3)&& !isPrime(num)){
    return 'BUZZ'
  }
  if(isMultiple(num,15)){
    return 'FIZZBUZZ'
  }
  if(isPrime(num)){
    return 'WHIZZ'
  }
  return String(num)
}

const isMultiple=(num, multiple)=> num%multiple===0

const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  } 
  if(num===1){
    return false;
  }
  return true;
}

export { isPrime, game };