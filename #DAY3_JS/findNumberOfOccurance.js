/*
1. Write a javascript function to return number of occurance of a particular word in a sentence
For example:
findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
Will return an output of 2 ( 2 occurance of kind in the string )
*/


function findNumberOfOccurance(givenString,findString){
    let splitString=givenString.split(" ");
   
    let regex = new RegExp(findString),counter=0;

    
    for(let index=0;index<splitString.length;index++){
        if(regex.test(splitString[index])){
            counter++;
        }
        
    }
    return counter;

   
}

//simple method to regex
const count= (givenString)=>{
    const re = /kind/g
    return ((givenString || " ").match(re) || []).length;

}


let groupWord='be  whenever possible.kindNess is kindwhat matters kind'.toLowerCase();

let find='kind';

//regex call.
console.log(count(groupWord));

console.log(findNumberOfOccurance(groupWord,find));




