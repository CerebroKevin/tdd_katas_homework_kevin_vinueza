/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */
const game = (num) => {
    if(isOdd(num)){
        if(isPrime(num)){
            return 'Prime'
        }else{
            return 'Odd'
        }
    }else{
        return 'Even'
    }
};

const isOdd= (num)=>{
    if(num%2!=0){
        return true
    }else{
        false
    }
}


const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
      if(num % i == 0) {
        return false;
      }
    } 
    if(num==1){
      return false;
    }
    return true;
  }

export {game};