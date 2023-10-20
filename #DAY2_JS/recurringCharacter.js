/*
1. Create a function add the special character "@" at the end of each recurring character "c" in a string
Input: "cat in the bagc"
Output: "c@t in c the bag"
*/


function recurringCharacterInAnString(givenString){
   let characaterArray=givenString.split(''),result=[];
   console.log(characaterArray)
   for(let index=0;index<characaterArray.length;index++){
     if(characaterArray[index]=='c'){
         result+=characaterArray[index];
         result+='@';
         index++;
     }
     else{
        result+=characaterArray[index];
     }
   }
   return result;
}


let a="cat inc ssc  c  the cagc";

console.log(recurringCharacterInAnString(a));