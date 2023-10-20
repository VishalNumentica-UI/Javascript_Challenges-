/*
2. Replace any numbers in a string to a character passed to the function
Input: replaceNumbers("arun@123", "d");
Output: arun@ddd
*/


function replaceNumbersInAnString(givenString, replaceCharacter){
    let characterArray=givenString.split('');
    for(let index=0;index<characterArray.length;index++){
          if(givenString.charAt(index)>='0' && givenString.charAt(index)<='9'){
            characterArray[index]=replaceCharacter;
      }
    }
    return characterArray.join("");
}

let givenString="arun@0123rdrd",replaceCharacter="d";

console.log(replaceNumbersInAnString(givenString, replaceCharacter));

