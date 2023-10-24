/*
2. Split an string into an array
For example
stringSplit(“numenticaui”, 2);
Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

*/

function stringSplit(givenString,characterSplit){
    let inital=0,final=characterSplit,index=0,newArray=[];
    let givenStringLength;
    if(givenString.length % characterSplit === 0){
        givenStringLength=givenString.length/characterSplit;
    }
    else{
        givenStringLength=givenString.length/characterSplit ;
    }

    for(iterator=0;iterator<givenStringLength;iterator++){
        newArray.push(givenString.slice(index,final));
        index+=characterSplit;
        final+=characterSplit;
     }
    
    return newArray;
     
}
let givenString='numenticaui';
let characterSplit=2;

console.log(stringSplit(givenString,characterSplit));