/*
2. Replace any numbers in a string to a character passed to the function
Input: replaceNumbers("arun@123", "d");
Output: arun@ddd
*/


function replaceNumbersInAnString(){
    let CharacterArray=givenString.split('');
    for(let index=0;index<CharacterArray.length;index++){
          if(givenString.charAt(index)>='0' && givenString.charAt(index)<='9'){
            CharacterArray[index]=replaceCharacter;
      }
    }
    return CharacterArray.join("");
}

let givenString="arun@123",replaceCharacter="d";

console.log(replaceNumbersInAnString(givenString, replaceCharacter));

