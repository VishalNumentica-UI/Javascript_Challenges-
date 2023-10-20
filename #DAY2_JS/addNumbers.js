/*
5. Calculate the sum of comma limited string
Input: "1.5, 2, 44, 66, 12, 90"
Output: 215.5
*/

function sumOfCommaLimitedString(){
    let sum=0;
    for(let index=0;index<givenString.length;index++){
        if(parseFloat(givenString[index])){
         sum+=parseFloat(givenString[index]);
       }
       else{
        console.log(givenString[index]);
       }    
    }
    return sum;
}


let givenString="1.5, 2, 44, 66, 12, 90,$,-1".split(",");
console.log(givenString);

console.log(sumOfCommaLimitedString(givenString));