/*
1. Write a javascript function to return number of occurance of a particular word in a sentence
For example:
findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
Will return an output of 2 ( 2 occurance of kind in the string )
*/


function findNumberOfOccurance(givenString,findString){
    let splitString=givenString.splice(" ");
    let regex = new RegExp(findString,);
    let counter=0;
    for(let index=0;index<splitString.length;index++){
        if(regex.test(splitString[index])){
            counter++;
        }
        
    }
    return counter;
}


let givenString='be  whenever possible.kindness is kindwhat matters kind'.split(" ");

let findString='kind';

console.log(findNumberOfOccurance(givenString,findString));




