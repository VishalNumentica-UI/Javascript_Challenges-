/*
2. Split an string into an array
For example
stringSplit(“numenticaui”, 2);
Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

*/

function stringSplit(givenString,characterSplit){
    let final=characterSplit,index=0,newArray=[];

    let givenStringLength=givenString.length/characterSplit;

    for(iterator=0;iterator<givenStringLength;iterator++){
        newArray.push(givenString.slice(index,final));
        index+=characterSplit;
        final+=characterSplit;
     }
    return newArray;
}
let word='numenticaui',charSplit=2;

console.log(stringSplit(word,charSplit));