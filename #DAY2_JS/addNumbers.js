/*
5. Calculate the sum of comma limited string
Input: "1.5, 2, 44, 66, 12, 90"
Output: 215.5
*/

function sumOfCommaLimitedString(givenString){
    let sum=0;
    for(let index=0;index<givenString.length;index++){
        let value=parseFloat(givenString[index]);
        if(value){
         sum+=value;
       }
       else{
          return "Invalid Arguments"
       }    
    }
    return sum;
}


let givenString="1.5, 2, 44, 66, 12, 90,-1".split(",");
console.log(givenString);

console.log(sumOfCommaLimitedString(givenString));