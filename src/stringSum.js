/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */

function sum(... numbers){

    const numericValues = numbers.map((number)=> getNumericValue(number));
    return numericValues.reduce(getSum,0);
    
}

function getSum(total, number){
    return total+number;
}

function isEmptyString(string){
    return string.trim().length===0;
}

function getNumericValue(string){
    if(isEmptyString(string) | parseInt(string)<0){
        return 0
    }else{
        return parseInt(string);
    }
}

export {sum};