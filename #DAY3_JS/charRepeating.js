/*
4. Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously
*/


function characterRepeating(givenString){
     let currentCounter=0,currentCharacter,previousCharacter,previousCounter=0;

    for(let index=0;index<givenString.length;index++){

         if(givenString.charAt(index) === givenString.charAt(index+1)){
             currentCharacter=givenString.charAt(index);
             currentCounter++;
           
             if(index == (givenString.length-1)){
                if(currentCounter>=previousCounter){
                    previousCounter=currentCounter;
                    previousCharacter=currentCharacter;
                }

             }
         }
         else{

            if(currentCounter==0 && previousCounter==0){
                continue;
            }
            else if(currentCounter>=previousCounter){
                previousCounter=currentCounter;
                previousCharacter=currentCharacter;
             
                currentCharacter="";
                currentCounter=0;
              
            }
            else{
                continue;
            }
            
         }
       
    }
  //console.log(previousCharacter+""+previousCounter);
    return previousCharacter;

}

let givenString='traaainngfornewbie';

console.log(characterRepeating(givenString));
