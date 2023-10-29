
function sumOfInteger(){
    let sum=0;
     while(inputNumber>0){
        let Remainder=inputNumber%10;
        sum+=Remainder;
        inputNumber=Math.floor(inputNumber/10);
     }
     return sum;
}

let inputNumber=265223

console.log(sumOfInteger(inputNumber));