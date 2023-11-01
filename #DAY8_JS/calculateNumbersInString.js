/*
2. Convert string to arithmetic operation
For example accept a string like "10 + 20"
and return output as 30
b. "20 - 10 " //Output 10
Only string input is allowed which you have to parse and get a number output
eval is not allowed
*/

function calculateNumbersInString(manipulateString){

    let duplicateString=manipulateString.replace(/\s/g,"");

    manipulateString=duplicateString.replace(/([-+*%/])/g, ' ').split(' ');

    let calculateNumbers=[]

    for(let index of manipulateString){
        if(index !== ''){
            calculateNumbers.push(Number(index));
        }
    }
    let calculateNumberLength=calculateNumbers.length;

    let iterator1=0,iterator2=1;

    for(let index=0;index<duplicateString.length;index++){

          if(duplicateString[index] === '*'){
              if(duplicateString[index+1] === '*'){
                 calculateNumbers[iterator2]=calculateNumbers[iterator1++] ** calculateNumbers[iterator2++];
              }
              else{
                calculateNumbers[iterator2]=calculateNumbers[iterator1++] * calculateNumbers[iterator2++];
              } 
          }
          else if(duplicateString[index] === '+'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++]+calculateNumbers[iterator2++];
          }
          else if(duplicateString[index] === '-'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++]-calculateNumbers[iterator2++];
          }
          else if(duplicateString[index] === '/'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++] / calculateNumbers[iterator2++];
          }
         else if(duplicateString[index] === '%'){
               calculateNumbers[iterator2]=calculateNumbers[iterator1++] % calculateNumbers[iterator2++];
         } 
    }
    return calculateNumbers[calculateNumberLength-1];
}

const inputString="20*20+10/410* 4";
console.log(calculateNumbersInString(inputString));