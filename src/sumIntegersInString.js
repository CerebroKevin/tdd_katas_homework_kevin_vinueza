/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/


const sumOfIntegersInString =(strin)=> {
    const arr= strin.split('');
    let total=0;
    let num='';

    for(let i=0; i<arr.length;i++){

       if(!(isNaN(arr[i]))){
        num=num+arr[i]
        console.log(num)
        
       }if((isNaN(arr[i])) || (i== (arr.length-1))){
        
            if(num.length>0){
                total= total+parseInt(num)
                num=''
            }
       }
    }

    return total;

};

export {sumOfIntegersInString} 
