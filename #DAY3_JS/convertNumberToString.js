/*
8. Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”
*/

function convertNumberToString(digits){

  if(typeof digits ==="number" && digits >=0){

   let numberToString=digits.toString(),resultantString="";
   
   for(let index=0;index<numberToString.length;index++){
        let value=numberToString.charAt(index);
        console.log(value);
        switch(value){
        case '1':
            resultantString+= 'one';
            break;
        case '2':
            resultantString+= 'two';
            break;
        case '3':
            resultantString+= 'three';
            break;
        case '4':
            resultantString+= 'four';
            break;
        case '5':
            resultantString+= 'five';
            break;
        case '6':
            resultantString+= 'six';
            break;
        case '7':
            resultantString+= 'seven';
            break;
        case '8':
            resultantString+= 'eight';
            break;
        case '9':
            resultantString+= 'nine';
            break;
        case '0':
            resultantString+= 'zer0';
            break;
    }
   }
   return resultantString;
  }
   return "invalid Argument is passed";
    
}

let givenNumber=98;

console.log(convertNumberToString(givenNumber));